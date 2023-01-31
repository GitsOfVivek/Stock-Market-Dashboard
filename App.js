// Alpha Vantage Stock API
// API Key: VLP5C5GCWR65Y9XP

const searchBtn = document.getElementById('btn--search');
const inputText = document.getElementById('input-box');
const inputFilterAll = document.querySelectorAll('.btn--filter');
const modalHeaderLeft = document.getElementById('modal__header-left');
const dataGraph = document.getElementById('data-graph');

let data;

inputFilterAll.forEach(btnFil => {
	btnFil.addEventListener('click', e => {
		inputFilterAll.forEach(btn => btn.classList.remove('filter--selected'));
		e.target.classList.add('filter--selected');
	});
});

const getData = async function (searchTerm, filter) {
	const url =
		filter !== 'INTRADAY'
			? `https://www.alphavantage.co/query?function=TIME_SERIES_${filter}_ADJUSTED&symbol=${searchTerm}&apikey=VLP5C5GCWR65Y9XP`
			: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${searchTerm}&interval=15min&apikey=VLP5C5GCWR65Y9XP`;
	console.log(filter, url);
	// const res = await fetch(url);
	// const resData = await res.json();
	fetch(url)
		.then(res => res.json())
		.then(resData => {
			data = resData;
			console.log(data);
			showData(data);
		})
		.catch(() => showError(searchTerm));
};
function cbForSearchBtn() {
	modalHeaderLeft.innerHTML = '';
	dataGraph.innerHTML = `
		<div id="loading-section">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				style="
					margin: auto;
					background: #afafaf;
					display: block;
					shape-rendering: auto;
				"
				width="200px"
				height="200px"
				viewBox="0 0 100 100"
				preserveAspectRatio="xMidYMid">
				<g transform="translate(80,50)">
					<g transform="rotate(0)">
						<circle
							cx="0"
							cy="0"
							r="6"
							fill="#ff7f00"
							fill-opacity="1">
							<animateTransform
								attributeName="transform"
								type="scale"
								begin="-0.7608695652173912s"
								values="1.5 1.5;1 1"
								keyTimes="0;1"
								dur="0.8695652173913042s"
								repeatCount="indefinite"></animateTransform>
							<animate
								attributeName="fill-opacity"
								keyTimes="0;1"
								dur="0.8695652173913042s"
								repeatCount="indefinite"
								values="1;0"
								begin="-0.7608695652173912s"></animate>
						</circle>
					</g>
				</g>
				<g
					transform="translate(71.21320343559643,71.21320343559643)">
					<g transform="rotate(45)">
						<circle
							cx="0"
							cy="0"
							r="6"
							fill="#ff7f00"
							fill-opacity="0.875">
							<animateTransform
								attributeName="transform"
								type="scale"
								begin="-0.6521739130434782s"
								values="1.5 1.5;1 1"
								keyTimes="0;1"
								dur="0.8695652173913042s"
								repeatCount="indefinite"></animateTransform>
							<animate
								attributeName="fill-opacity"
								keyTimes="0;1"
								dur="0.8695652173913042s"
								repeatCount="indefinite"
								values="1;0"
								begin="-0.6521739130434782s"></animate>
						</circle>
					</g>
				</g>
				<g transform="translate(50,80)">
					<g transform="rotate(90)">
						<circle
							cx="0"
							cy="0"
							r="6"
							fill="#ff7f00"
							fill-opacity="0.75">
							<animateTransform
								attributeName="transform"
								type="scale"
								begin="-0.5434782608695652s"
								values="1.5 1.5;1 1"
								keyTimes="0;1"
								dur="0.8695652173913042s"
								repeatCount="indefinite"></animateTransform>
							<animate
								attributeName="fill-opacity"
								keyTimes="0;1"
								dur="0.8695652173913042s"
								repeatCount="indefinite"
								values="1;0"
								begin="-0.5434782608695652s"></animate>
						</circle>
					</g>
				</g>
				<g
					transform="translate(28.786796564403577,71.21320343559643)">
					<g transform="rotate(135)">
						<circle
							cx="0"
							cy="0"
							r="6"
							fill="#ff7f00"
							fill-opacity="0.625">
							<animateTransform
								attributeName="transform"
								type="scale"
								begin="-0.4347826086956521s"
								values="1.5 1.5;1 1"
								keyTimes="0;1"
								dur="0.8695652173913042s"
								repeatCount="indefinite"></animateTransform>
							<animate
								attributeName="fill-opacity"
								keyTimes="0;1"
								dur="0.8695652173913042s"
								repeatCount="indefinite"
								values="1;0"
								begin="-0.4347826086956521s"></animate>
						</circle>
					</g>
				</g>
				<g transform="translate(20,50.00000000000001)">
					<g transform="rotate(180)">
						<circle
							cx="0"
							cy="0"
							r="6"
							fill="#ff7f00"
							fill-opacity="0.5">
							<animateTransform
								attributeName="transform"
								type="scale"
								begin="-0.3260869565217391s"
								values="1.5 1.5;1 1"
								keyTimes="0;1"
								dur="0.8695652173913042s"
								repeatCount="indefinite"></animateTransform>
							<animate
								attributeName="fill-opacity"
								keyTimes="0;1"
								dur="0.8695652173913042s"
								repeatCount="indefinite"
								values="1;0"
								begin="-0.3260869565217391s"></animate>
						</circle>
					</g>
				</g>
				<g
					transform="translate(28.78679656440357,28.786796564403577)">
					<g transform="rotate(225)">
						<circle
							cx="0"
							cy="0"
							r="6"
							fill="#ff7f00"
							fill-opacity="0.375">
							<animateTransform
								attributeName="transform"
								type="scale"
								begin="-0.21739130434782605s"
								values="1.5 1.5;1 1"
								keyTimes="0;1"
								dur="0.8695652173913042s"
								repeatCount="indefinite"></animateTransform>
							<animate
								attributeName="fill-opacity"
								keyTimes="0;1"
								dur="0.8695652173913042s"
								repeatCount="indefinite"
								values="1;0"
								begin="-0.21739130434782605s"></animate>
						</circle>
					</g>
				</g>
				<g transform="translate(49.99999999999999,20)">
					<g transform="rotate(270)">
						<circle
							cx="0"
							cy="0"
							r="6"
							fill="#ff7f00"
							fill-opacity="0.25">
							<animateTransform
								attributeName="transform"
								type="scale"
								begin="-0.10869565217391303s"
								values="1.5 1.5;1 1"
								keyTimes="0;1"
								dur="0.8695652173913042s"
								repeatCount="indefinite"></animateTransform>
							<animate
								attributeName="fill-opacity"
								keyTimes="0;1"
								dur="0.8695652173913042s"
								repeatCount="indefinite"
								values="1;0"
								begin="-0.10869565217391303s"></animate>
						</circle>
					</g>
				</g>
				<g
					transform="translate(71.21320343559643,28.78679656440357)">
					<g transform="rotate(315)">
						<circle
							cx="0"
							cy="0"
							r="6"
							fill="#ff7f00"
							fill-opacity="0.125">
							<animateTransform
								attributeName="transform"
								type="scale"
								begin="0s"
								values="1.5 1.5;1 1"
								keyTimes="0;1"
								dur="0.8695652173913042s"
								repeatCount="indefinite"></animateTransform>
							<animate
								attributeName="fill-opacity"
								keyTimes="0;1"
								dur="0.8695652173913042s"
								repeatCount="indefinite"
								values="1;0"
								begin="0s"></animate>
						</circle>
					</g>
				</g>
			</svg>
			<div class="loading">Please Wait...</div>
			<div class="loading-2">We are fetching Data...⌛</div>
		</div>
	`;
	const searchTerm = inputText.value.toLowerCase().trim();
	if (searchTerm !== '') {
		let selectedFilter;
		for (const el of inputFilterAll) {
			if (el.classList.contains('filter--selected')) {
				selectedFilter = el.textContent.toUpperCase().trim();
			}
		}
		getData(searchTerm, selectedFilter);
		showModal();
	}
	inputText.value = '';
}
searchBtn.addEventListener('click', () => {
	cbForSearchBtn();
});
window.addEventListener('keyup', e => {
	if (inputText.value.trim().toLowerCase() !== '' && e.key === 'Enter') {
		cbForSearchBtn();
	}
});

// Modal Working
const closeModalBtn = document.getElementById('btn-close-modal');
const modalBox = document.getElementById('modal');
const mainSec = document.getElementById('main');
closeModalBtn.addEventListener('click', hideModal);

function hideModal() {
	modalBox.classList.add('hidden');
	mainSec.classList.remove('blur');
}
function showModal() {
	modalBox.classList.remove('hidden');
	mainSec.classList.add('blur');
}
document.addEventListener('keydown', e => {
	if (e.key === 'Escape' && !modalBox.classList.contains('hidden')) {
		hideModal();
	}
});

// Adding data from API

function showData(stockData) {
	// Header

	const stockItem = document.createElement('div');
	stockItem.classList.add('stock-info');
	stockItem.innerHTML = `
		<div class="stock-name bg-white">
			<span>${stockData['Meta Data']['2. Symbol']}</span>
		</div>
		<div class="stock-price bg-green">
			<span>123.56</span>
		</div>
		<div class="stock-filter bg-white">
			<span>${stockData['Meta Data']['1. Information'].split(' ')[0]}</span>
		</div>
	`;
	modalHeaderLeft.append(stockItem);
	// Graph Data

	dataGraph.innerHTML = '';
	const dataGraphInfo = document.createElement('div');
	dataGraphInfo.classList.add('data-graph-info');

	const sliced = Object.fromEntries(
		Object.entries(stockData['Time Series (15min)']).slice(0, 5)
	);
	const first = Object.fromEntries(Object.entries(sliced).slice(0, 1));
	const firstData1 = Object.keys(first)[0].split(' ')[1];

	dataGraphInfo.innerHTML = `
		<div class="graph-item">
			<div class="graph-item--header">
				<span>${stockData['Meta Data']['3. Last Refreshed'].split(' ')[0]}</span>
			</div>
			<div class="graph-item--header">
				<span>Open</span>
			</div>
			<div class="graph-item--header">
				<span>High</span>
			</div>
			<div class="graph-item--header">
				<span>Low</span>
			</div>
			<div class="graph-item--header">
				<span>Close</span>
			</div>
			<div class="graph-item--header">
				<span>Volume</span>
			</div>
		</div>
		<div class="graph-item">
			<div class="graph-item--name bg-white">
				<span>${firstData1}</span>
			</div>
			<div class="graph-item--price bg-white">
				<span>153.45</span>
			</div>
			<div class="graph-item--filter bg-white">
				<span>169.98</span>
			</div>
			<div class="graph-item--delete bg-white">
				<span>103.87</span>
			</div>
			<div class="graph-item--delete bg-white">
				<span>130.45</span>
			</div>
			<div class="graph-item--delete bg-white">
				<span>157.34</span>
			</div>
		</div>
		<div class="graph-item">
			<div class="graph-item--name bg-white">
				<span>18:15:00</span>
			</div>
			<div class="graph-item--price bg-white">
				<span>153.45</span>
			</div>
			<div class="graph-item--filter bg-white">
				<span>169.98</span>
			</div>
			<div class="graph-item--delete bg-white">
				<span>103.87</span>
			</div>
			<div class="graph-item--delete bg-white">
				<span>130.45</span>
			</div>
			<div class="graph-item--delete bg-white">
				<span>157.34</span>
			</div>
		</div>
		<div class="graph-item">
			<div class="graph-item--name bg-white">
				<span>18:15:00</span>
			</div>
			<div class="graph-item--price bg-white">
				<span>153.45</span>
			</div>
			<div class="graph-item--filter bg-white">
				<span>169.98</span>
			</div>
			<div class="graph-item--delete bg-white">
				<span>103.87</span>
			</div>
			<div class="graph-item--delete bg-white">
				<span>130.45</span>
			</div>
			<div class="graph-item--delete bg-white">
				<span>157.34</span>
			</div>
		</div>
		<div class="graph-item">
			<div class="graph-item--name bg-white">
				<span>18:15:00</span>
			</div>
			<div class="graph-item--price bg-white">
				<span>153.45</span>
			</div>
			<div class="graph-item--filter bg-white">
				<span>169.98</span>
			</div>
			<div class="graph-item--delete bg-white">
				<span>103.87</span>
			</div>
			<div class="graph-item--delete bg-white">
				<span>130.45</span>
			</div>
			<div class="graph-item--delete bg-white">
				<span>157.34</span>
			</div>
		</div>
		<div class="graph-item">
			<div class="graph-item--name bg-white">
				<span>18:15:00</span>
			</div>
			<div class="graph-item--price bg-white">
				<span>153.45</span>
			</div>
			<div class="graph-item--filter bg-white">
				<span>169.98</span>
			</div>
			<div class="graph-item--delete bg-white">
				<span>103.87</span>
			</div>
			<div class="graph-item--delete bg-white">
				<span>130.45</span>
			</div>
			<div class="graph-item--delete bg-white">
				<span>157.34</span>
			</div>
		</div>
	`;
	dataGraph.append(dataGraphInfo);
}

function showError(text) {
	dataGraph.innerHTML = `
	<div id="loading-section">
		<div class="loading"><strong style="color: rgb(176, 0, 85)">Error...</strong></div>
		<div class="loading-2"><strong>${text.toUpperCase()}</strong> is not a valid symbol</div>
	</div>
	`;
}
