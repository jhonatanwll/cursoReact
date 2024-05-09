import React from 'react'

const ConditionalRender = () => {
    const x = 5

const name = "Jhonatan"

  return (
    <div>
        {/* 7 - render condicioal */}
        <h3>Isso será exibido?</h3>
        {x > 2 && <p>Se x for true sim!</p>}
        {/* 8 - else */}
        <h3>Render Ternário</h3>
        {name === "Jhonatan" ? (
          <div>
            <p>Olá {name}!!</p>
            </div>
        ) : (
          <div>
            Nome não encontrado
          </div>
        ) }
    </div>
  )
}

export default ConditionalRender