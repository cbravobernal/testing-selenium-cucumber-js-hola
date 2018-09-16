Feature: Leer el horóscopo de Acuario
  Como usuario, para ver mi futuro, leere el horoscopo de Acuario

  Scenario: Página de horoscopo de la revista Hola
    When Encuentro a Acuario y hago click
    Then Veo la prediccion de hoy
    And Veo que tal me llevo con Libra