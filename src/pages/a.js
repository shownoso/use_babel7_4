export default () => {
  console.log('page A')
  Promise.resolve().finally();
}

async function b() {
  const a = await Promise.resolve(10);
  console.log(a)
}
b();