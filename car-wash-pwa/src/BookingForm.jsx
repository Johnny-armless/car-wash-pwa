import React, { useState } from 'react'
import { db } from './firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

function BookingForm() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    placa: '',
    tipoCarro: '',
    tipoAtendimento: ''
  })

  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Enviando...')

    try {
      await addDoc(collection(db, 'agendamentos'), {
        ...formData,
        criadoEm: Timestamp.now()
      })

      setStatus('Agendamento enviado com sucesso!')
      setFormData({
        nome: '',
        telefone: '',
        placa: '',
        tipoCarro: '',
        tipoAtendimento: ''
      })
    } catch (error) {
      console.error('Erro ao enviar:', error)
      setStatus('Erro ao enviar. Tente novamente.')
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
      <label>
        Nome:
        <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
      </label>

      <label>
        Telefone:
        <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} required />
      </label>

      <label>
        Placa do carro:
        <input type="text" name="placa" value={formData.placa} onChange={handleChange} required />
      </label>

      <label>
        Tipo do carro:
        <input type="text" name="tipoCarro" value={formData.tipoCarro} onChange={handleChange} required />
      </label>

      <label>
        Tipo de atendimento:
        <select name="tipoAtendimento" value={formData.tipoAtendimento} onChange={handleChange} required>
          <option value="">Selecione</option>
          <option value="pickup">Pick-up</option>
          <option value="drivein">Drive-in</option>
        </select>
      </label>

      <button type="submit">Enviar</button>
      {status && <p>{status}</p>}
    </form>
  )
}

export default BookingForm