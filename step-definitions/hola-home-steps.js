module.exports = function () {

  this.When(/^Entro en la home del Hola$/, async function () {
    const holaPage = await helpers.loadPage('https://www.hola.com/');
    const portada = await helpers.getAttributeValue('body', 'data-section');
    expect(portada).to.be.eq('portada');
  });
  this.Then(/^Debo ver 5 noticias principales arriba$/, async function () {
    const elementos = await driver.findElements(By.css(".container.highlighted > section > ul > li"));
    expect(elementos.length).to.be.eq(5);
  });
};