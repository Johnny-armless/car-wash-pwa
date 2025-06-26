import React from 'react'

function BookingForm() {
  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
      <label>
        Nome:
        <input type="text" name="nome" required />
      </label>

      <label>
        Telefone:
        <input type="tel" name="telefone" required />
      </label>

      <label>
        Placa do carro:
        <input type="text" name="placa" required />
      </label>

      <label>
        Tipo do carro:
        <input type="text" name="tipoCarro" required />
      </label>

      <label>
        Tipo de atendimento:
        <select name="tipoAtendimento" required>
          <option value="">Selecione</option>
          <option value="pickup">Pick-up</option>
          <option value="drivein">Drive-in</option>
        </select>
      </label>

      <button type="submit">Enviar</button>
    </form>
  )
}

export default BookingForm