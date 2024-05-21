const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () =>{
	menu.classList.toggle('menu-open');
});


const chartData = {
  labels: ["Presale", "Liquidity", "Burn", "Tax"],
  data: [57, 27.6165, 15.3835, 0],
};

const myChart = document.querySelector(".my-chart");
const ul = document.querySelector(".programming-stats .details ul");

new Chart(myChart, {
  type: "doughnut",
  data: {
    labels: chartData.labels,
    datasets: [
      {
        label: " ",
        data: chartData.data,
      },
    ],
  },
  options: {
    borderWidth: 7,
    borderRadius: 2,
    hoverBorderWidth: 0,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

const populateUl = () => {
  chartData.labels.forEach((l, i) => {
    let li = document.createElement("li");
    li.innerHTML = `${l}: <span class='percentage'>${chartData.data[i]}%</span>`;
    ul.appendChild(li);
  });
};

populateUl();


const infipa = document.querySelectorAll(".partner");

infipa.forEach(infi => {
	const infipar = infi.querySelector(".partner div");

	const infipacon = Array.from(infipar.childern);

	infipacon.forEach(item => {
		const duplicatedItem = item.cloneNode(true);
		infipar.appendChild(duplicatedItem);
		infipar.style.animation = "move 12s linear infinite";
	});
});