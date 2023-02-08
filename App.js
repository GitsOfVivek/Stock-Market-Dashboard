// Alpha Vantage Stock API
// apiKey = VLP5C5GCWR65Y9XP

const apiKey = 'VLP5C5GCWR65Y9XP';

const searchBtn = document.getElementById('btn--search');
const inputText = document.getElementById('input-box');
const inputFilterAll = document.querySelectorAll('.btn--filter');
const modalHeaderLeft = document.getElementById('modal__header-left');
const dataGraph = document.getElementById('data-graph');
const btnsWrapperModal = document.getElementById('modal__btns');
const closeModalBtn = document.getElementById('btn-close-modal');
const modalBox = document.getElementById('modal');
const mainSec = document.getElementById('main');
const watchList = document.getElementById('stock-list');
let btnAddWatchList = document.getElementById('btn-add-watchlist');
let btnRemoveWatchList = document.getElementById('btn-remove-watchlist');

inputFilterAll.forEach(btnFil => {
	btnFil.addEventListener('click', e => {
		inputFilterAll.forEach(btn => btn.classList.remove('filter--selected'));
		e.target.classList.add('filter--selected');
	});
});

const getData = async function (searchTerm, filter) {
	searchTerm = searchTerm.toUpperCase();
	filter = filter.toUpperCase();
	try {
		const url =
			filter !== 'INTRADAY'
				? `https://www.alphavantage.co/query?function=TIME_SERIES_${filter}_ADJUSTED&symbol=${searchTerm}&apikey=${apiKey}`
				: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${searchTerm}&interval=15min&apikey=${apiKey}`;
		const res = await fetch(url);
		const resData = await res.json();
		showData(resData);
	} catch (err) {
		showError(searchTerm);
		console.error(err);
	}
};
function cbForSearchBtn(searchTerm, selectedFilter) {
	modalHeaderLeft.innerHTML = '';
	btnsWrapperModal.innerHTML = '';

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
	getData(searchTerm, selectedFilter);
	showModal();
}
searchBtn.addEventListener('click', () => {
	const searchTerm = inputText.value.toLowerCase().trim();
	if (searchTerm !== '') {
		let selectedFilter;
		for (const el of inputFilterAll) {
			if (el.classList.contains('filter--selected')) {
				selectedFilter = el.textContent.toUpperCase().trim();
			}
		}
		cbForSearchBtn(searchTerm, selectedFilter);
	}
	inputText.value = '';
});
window.addEventListener('keyup', e => {
	if (inputText.value.trim().toLowerCase() !== '' && e.key === 'Enter') {
		const searchTerm = inputText.value.toLowerCase().trim();
		if (searchTerm !== '') {
			let selectedFilter;
			for (const el of inputFilterAll) {
				if (el.classList.contains('filter--selected')) {
					selectedFilter = el.textContent.toUpperCase().trim();
				}
			}
			cbForSearchBtn(searchTerm, selectedFilter);
		}
		inputText.value = '';
	}
});

// Modal Working

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
	dataGraph.innerHTML = '';
	const dataArr = [];
	for (const x in stockData) {
		dataArr.push(x);
	}
	const dataGraphInfo = document.createElement('div');
	if (
		stockData['Meta Data']['1. Information'].split(' ')[0].toLowerCase() !==
		'intraday'
	) {
		dataGraphInfo.classList.add('data-graph-info');

		const sliced = Object.fromEntries(
			Object.entries(stockData[dataArr[1]]).slice(0, 5)
		);
		const first = Object.fromEntries(Object.entries(sliced).slice(0, 5));

		const timeArr = [];
		for (const x in first) {
			timeArr.push(x);
		}

		// Header

		const stockItem = document.createElement('div');
		stockItem.classList.add('stock-info');
		stockItem.innerHTML = `
			<div class="stock-name bg-white">
				<span>${stockData['Meta Data']['2. Symbol']}</span>
			</div>
			<div class="stock-price bg-green">
				<span>${Number(first[`${timeArr[0]}`]['1. open']).toFixed(2)}</span>
			</div>
			<div class="stock-filter bg-white">
				<span>${stockData['Meta Data']['1. Information'].split(' ')[0]}</span>
			</div>
		`;
		modalHeaderLeft.append(stockItem);
		// Graph Data

		dataGraphInfo.innerHTML = `
			<div class="graph-item">
				<div class="graph-item--header">
					<span>Date</span>
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
				<div class="bg-white">
					<span>${timeArr[0]}</span>
				</div>
				<div class="bg-white">
					<span>${Number(first[`${timeArr[0]}`]['1. open']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${Number(first[`${timeArr[0]}`]['2. high']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${Number(first[`${timeArr[0]}`]['3. low']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${Number(first[`${timeArr[0]}`]['4. close']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${first[`${timeArr[0]}`]['6. volume']}</span>
				</div>
			</div>
			<div class="graph-item">
				<div class="bg-white">
					<span>${timeArr[1]}</span>
				</div>
				<div class="bg-white">
					<span>${Number(first[`${timeArr[1]}`]['1. open']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${Number(first[`${timeArr[1]}`]['2. high']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${Number(first[`${timeArr[1]}`]['3. low']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${Number(first[`${timeArr[1]}`]['4. close']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${first[`${timeArr[1]}`]['6. volume']}</span>
				</div>
			</div>
			<div class="graph-item">
				<div class="bg-white">
					<span>${timeArr[2]}</span>
				</div>
				<div class="bg-white">
				<span>${Number(first[`${timeArr[2]}`]['1. open']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${Number(first[`${timeArr[2]}`]['2. high']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${Number(first[`${timeArr[2]}`]['3. low']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${Number(first[`${timeArr[2]}`]['4. close']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${first[`${timeArr[2]}`]['6. volume']}</span>
				</div>
			</div>
			<div class="graph-item">
				<div class="bg-white">
					<span>${timeArr[3]}</span>
				</div>
				<div class="bg-white">
				<span>${Number(first[`${timeArr[3]}`]['1. open']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${Number(first[`${timeArr[3]}`]['2. high']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${Number(first[`${timeArr[3]}`]['3. low']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${Number(first[`${timeArr[3]}`]['4. close']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${first[`${timeArr[3]}`]['6. volume']}</span>
				</div>
			</div>
			<div class="graph-item">
				<div class="bg-white">
					<span>${timeArr[4]}</span>
				</div>
				<div class="bg-white">
				<span>${Number(first[`${timeArr[4]}`]['1. open']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${Number(first[`${timeArr[4]}`]['2. high']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${Number(first[`${timeArr[4]}`]['3. low']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${Number(first[`${timeArr[4]}`]['4. close']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${first[`${timeArr[4]}`]['6. volume']}</span>
				</div>
			</div>
			
			
		`;
		dataGraph.append(dataGraphInfo);

		// Buttons
		const btns = document.createElement('div');
		btns.classList.add('modal__btns-info');
		btns.innerHTML = `
			<button onclick="addToStorage(this)" id="btn-add-watchlist" data-stock-info="${
				stockData['Meta Data']['2. Symbol']
			}-${Number(first[`${timeArr[0]}`]['1. open']).toFixed(2)}-${
			stockData['Meta Data']['1. Information'].split(' ')[0]
		}">Add to Watchlist</button>
			<button onclick="removeFromStorage(this)" id="btn-remove-watchlist" data-stock-info="${
				stockData['Meta Data']['2. Symbol']
			}-${Number(first[`${timeArr[0]}`]['1. open']).toFixed(2)}-${
			stockData['Meta Data']['1. Information'].split(' ')[0]
		}">Remove from Watchlist</button>
		`;
		btnsWrapperModal.append(btns);
	} else {
		dataGraphInfo.classList.add('data-graph-info');

		const sliced = Object.fromEntries(
			Object.entries(stockData['Time Series (15min)']).slice(0, 5)
		);
		const first = Object.fromEntries(Object.entries(sliced).slice(0, 5));

		const timeArr = [];
		for (const x in first) {
			timeArr.push(x);
		}

		// Header

		const stockItem = document.createElement('div');
		stockItem.classList.add('stock-info');
		stockItem.innerHTML = `
			<div class="stock-name bg-white">
				<span>${stockData['Meta Data']['2. Symbol']}</span>
			</div>
			<div class="stock-price bg-green">
				<span>${Number(first[`${timeArr[0]}`]['1. open']).toFixed(2)}</span>
			</div>
			<div class="stock-filter bg-white">
				<span>${stockData['Meta Data']['1. Information'].split(' ')[0]}</span>
			</div>
		`;
		modalHeaderLeft.append(stockItem);
		// Graph Data

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
				<div class="bg-white">
					<span>${timeArr[0].split(' ')[1]}</span>
				</div>
				<div class="bg-white">
					<span>${Number(first[`${timeArr[0]}`]['1. open']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${Number(first[`${timeArr[0]}`]['2. high']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${Number(first[`${timeArr[0]}`]['3. low']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${Number(first[`${timeArr[0]}`]['4. close']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${first[`${timeArr[0]}`]['5. volume']}</span>
				</div>
			</div>
			<div class="graph-item">
				<div class="bg-white">
					<span>${timeArr[1].split(' ')[1]}</span>
				</div>
				<div class="bg-white">
					<span>${Number(first[`${timeArr[1]}`]['1. open']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${Number(first[`${timeArr[1]}`]['2. high']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${Number(first[`${timeArr[1]}`]['3. low']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${Number(first[`${timeArr[1]}`]['4. close']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${first[`${timeArr[1]}`]['5. volume']}</span>
				</div>
			</div>
			<div class="graph-item">
				<div class="bg-white">
					<span>${timeArr[2].split(' ')[1]}</span>
				</div>
				<div class="bg-white">
				<span>${Number(first[`${timeArr[2]}`]['1. open']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${Number(first[`${timeArr[2]}`]['2. high']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${Number(first[`${timeArr[2]}`]['3. low']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${Number(first[`${timeArr[2]}`]['4. close']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${first[`${timeArr[2]}`]['5. volume']}</span>
				</div>
			</div>
			<div class="graph-item">
				<div class="bg-white">
					<span>${timeArr[3].split(' ')[1]}</span>
				</div>
				<div class="bg-white">
				<span>${Number(first[`${timeArr[3]}`]['1. open']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${Number(first[`${timeArr[3]}`]['2. high']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${Number(first[`${timeArr[3]}`]['3. low']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${Number(first[`${timeArr[3]}`]['4. close']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${first[`${timeArr[3]}`]['5. volume']}</span>
				</div>
			</div>
			<div class="graph-item">
				<div class="bg-white">
					<span>${timeArr[4].split(' ')[1]}</span>
				</div>
				<div class="bg-white">
				<span>${Number(first[`${timeArr[4]}`]['1. open']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${Number(first[`${timeArr[4]}`]['2. high']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${Number(first[`${timeArr[4]}`]['3. low']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${Number(first[`${timeArr[4]}`]['4. close']).toFixed(2)}</span>
				</div>
				<div class="bg-white">
					<span>${first[`${timeArr[4]}`]['5. volume']}</span>
				</div>
			</div>
			
			
		`;
		dataGraph.append(dataGraphInfo);

		// Buttons
		const btns = document.createElement('div');
		btns.classList.add('modal__btns-info');
		btns.innerHTML = `
			<button onclick="addToStorage(this)" id="btn-add-watchlist" data-stock-info="${
				stockData['Meta Data']['2. Symbol']
			}-${Number(first[`${timeArr[0]}`]['1. open']).toFixed(2)}-${
			stockData['Meta Data']['1. Information'].split(' ')[0]
		}">Add to Watchlist</button>
			<button onclick="removeFromStorage(this)" id="btn-remove-watchlist" data-stock-info="${
				stockData['Meta Data']['2. Symbol']
			}-${Number(first[`${timeArr[0]}`]['1. open']).toFixed(2)}-${
			stockData['Meta Data']['1. Information'].split(' ')[0]
		}">Remove from Watchlist</button>
		`;
		btnsWrapperModal.append(btns);
	}
	btnAddWatchList = document.getElementById('btn-add-watchlist');
	btnRemoveWatchList = document.getElementById('btn-remove-watchlist');
}

function showError(text) {
	dataGraph.innerHTML = `
	<div id="loading-section">
		<div class="loading"><strong style="color: rgb(176, 0, 85)">Error!!!</strong></div>
		<div class="loading-2"><strong>${text.toUpperCase()}</strong> is not a valid symbol</div>
	</div>
	`;
}

// Show Watchlist

let watchListData = localStorage.getItem('watchlist')
	? JSON.parse(localStorage.getItem('watchlist'))
	: [];

function showWatchList(arr) {
	watchList.innerHTML = '';
	for (const x of arr) {
		const div = document.createElement('div');
		div.classList.add('stock-item');
		div.innerHTML = `
		<div data-stock-info="${x.name}-${x.price}-${x.filter}" onclick="callCB(this)" class="bg-white">
			<span>${x.name}</span>
		</div>
		<div data-stock-info="${x.name}-${x.price}-${x.filter}" onclick="callCB(this)" class="${x.color}">
			<span>${x.price}</span>
		</div>
		<div data-stock-info="${x.name}-${x.price}-${x.filter}" onclick="callCB(this)" class="bg-white">
			<span>${x.filter}</span>
		</div>
		<div data-stock-info="${x.name}-${x.price}-${x.filter}" onclick="removeFromStorage(this)" class="bg-red">
			<span>Delete</span>
		</div>
	
		`;
		watchList.append(div);
	}
}

async function updateWatchList(arr) {
	for (const stock of arr) {
		const url =
			stock.filter.toUpperCase() !== 'INTRADAY'
				? `https://www.alphavantage.co/query?function=TIME_SERIES_${stock.filter}_ADJUSTED&symbol=${stock.name}&apikey=${apiKey}`
				: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stock.name}&interval=15min&apikey=${apiKey}`;
		const res = await fetch(url);
		const stockData = await res.json();

		const dataArr = [];
		for (const x in stockData) {
			dataArr.push(x);
		}
		if (
			stockData['Meta Data']['1. Information']
				.split(' ')[0]
				.toLowerCase() !== 'intraday'
		) {
			const sliced = Object.fromEntries(
				Object.entries(stockData[dataArr[1]]).slice(0, 5)
			);
			const first = Object.fromEntries(
				Object.entries(sliced).slice(0, 5)
			);

			const timeArr = [];
			for (const x in first) {
				timeArr.push(x);
			}
			// price
			if (
				stock.price <
				Number(first[`${timeArr[0]}`]['1. open']).toFixed(2)
			) {
				stock.color = 'bg-green';
			} else if (
				stock.price ===
				Number(first[`${timeArr[0]}`]['1. open']).toFixed(2)
			) {
				stock.color = 'bg-white';
			} else {
				stock.color = 'bg-red';
			}
			stock.price = Number(first[`${timeArr[0]}`]['1. open']).toFixed(2);
		} else {
			const sliced = Object.fromEntries(
				Object.entries(stockData['Time Series (15min)']).slice(0, 5)
			);
			const first = Object.fromEntries(
				Object.entries(sliced).slice(0, 5)
			);

			const timeArr = [];
			for (const x in first) {
				timeArr.push(x);
			}
			// price
			if (
				stock.price <
				Number(first[`${timeArr[0]}`]['1. open']).toFixed(2)
			) {
				stock.color = 'bg-green';
			} else if (
				stock.price ===
				Number(first[`${timeArr[0]}`]['1. open']).toFixed(2)
			) {
				stock.color = 'bg-white';
			} else {
				stock.color = 'bg-red';
			}
			stock.price = Number(first[`${timeArr[0]}`]['1. open']).toFixed(2);
		}
	}
	showWatchList(arr);
}
window.onload = updateWatchList(watchListData);

function addToStorage(e) {
	const addStockIndo = e.dataset.stockInfo.split('-');
	const obj = {
		name: `${addStockIndo[0]}`,
		price: `${addStockIndo[1]}`,
		filter: `${addStockIndo[2]}`,
		color: 'bg-white',
	};
	let isPresent = false;
	watchListData.forEach(x => {
		if (
			x.name.toLowerCase() === obj.name.toLowerCase() &&
			x.filter.toLowerCase() === obj.filter.toLowerCase()
		) {
			isPresent = true;
		}
	});
	if (!isPresent) {
		watchListData.push(obj);
		showWatchList(watchListData);
	}
	localStorage.setItem('watchlist', JSON.stringify(watchListData));
}
function removeFromStorage(e) {
	const removeInfo = e.dataset.stockInfo.split('-');
	const obj = {
		name: `${removeInfo[0]}`,
		filter: `${removeInfo[2]}`,
	};
	let isPresent = false;
	let idx = -1;
	watchListData.forEach((x, i) => {
		if (
			x.name.toLowerCase() === obj.name.toLowerCase() &&
			x.filter.toLowerCase() === obj.filter.toLowerCase()
		) {
			isPresent = true;
			idx = i;
		}
	});
	if (isPresent) {
		watchListData.splice(idx, 1);
		showWatchList(watchListData);
	}
	localStorage.setItem('watchlist', JSON.stringify(watchListData));
}

function callCB(e) {
	const arr = e.dataset.stockInfo.split('-');
	cbForSearchBtn(arr[0].toUpperCase(), arr[2].toUpperCase());
}
