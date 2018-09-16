const moment = require('moment');

module.exports = function () {

  this.When(/^Encuentro a Acuario y hago click$/, async function () {

    await helpers.loadPage('https://www.hola.com/');
    await helpers.clickHiddenElement('a', 'Acuario');
    //await setTimeout(() => {return true}, 10000);
    const portadahoroscopo = await helpers.getAttributeValue('body', 'data-section');
    expect(portadahoroscopo).to.be.eq('horoscopo');
  });
  this.Then(/^Veo la prediccion de hoy$/, async function () {
    const title = await driver.findElement(By.css("#titprev span")).getAttribute('innerText');
    expect(title).to.be.eq('Horóscopo Acuario');
    const date = await driver.findElement(By.css("#resultados h2.title strong")).getAttribute('innerText');
    const today = moment().locale('ES').format('LL').toUpperCase();
    expect(date.toUpperCase()).to.be.eq(today);
  });
  this.Then(/^Veo que tal me llevo con Libra$/, async function () {
    const selector = await driver.findElement(By.css("a[href='/horoscopo/acuario/compatibilidad/libra/']"));
    const href = await selector.getAttribute('href');
    await helpers.loadPage(href);
    const title = await driver.findElement(By.css("#resultados h1.title")).getAttribute('innerText');
    expect(title).to.be.eq('Compatibilidad de Acuario con Libra');
  });
};