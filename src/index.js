// import "core-js/stable";
// import "regenerator-runtime/runtime";
import pageA from './pages/a';
const a = () => {
  console.log(1)
}
Promise.resolve().finally();
new Set([1, 2, 3, 2, 1]);

pageA();

async function b() {
  const a = await Promise.resolve(10);
  console.log(a)
}
b();