module.exports = async function App(context) {
  console.log(context.event);
  if (context.event.isText && context.event.message.text ==='Nhã ơiii') {
    await context.sendText(`Sao`);
  }
};
