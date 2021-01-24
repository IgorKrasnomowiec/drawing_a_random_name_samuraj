const btn = document.querySelector(`button`);
const div = document.querySelector(`div`);
const names = [`ela`, `dorota`, `jadzia`, `milena`, `igor`, `jacek`, `marek`];
const nameGenerator = () => {
  const index = Math.floor(Math.random() * 7);
  div.textContent = `Najfajniejsze imie ${names[index]}`;
};
const index = Math.floor(Math.random() * names.length);

btn.addEventListener(`click`, nameGenerator);
