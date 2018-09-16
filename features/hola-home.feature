Feature: Llegar a la página inicial del Hola
  Como usuario, para encontrar los últimos cotilleos,
  quiero entrar en la home del hola y ver las noticias principales

  Scenario: Home de la revista online Hola
    When Entro en la home del Hola
    Then Debo ver 5 noticias principales arriba