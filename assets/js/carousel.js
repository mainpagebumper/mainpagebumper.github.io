

const slidesData = [
    { src: 'https://clickmortarlibrary.nyc3.cdn.digitaloceanspaces.com/Kendu/CEX-Icons/uniswap-logo.svg', description: 'uniswap logo', link: 'https://app.uniswap.org/swap?outputCurrency=0xaa95f26e30001251fb905d264aa7b00ee9df6c18&inputCurrency=ETH' },
    { src: 'https://clickmortarlibrary.nyc3.cdn.digitaloceanspaces.com/Kendu/CEX-Icons/lbank-logo.svg', description: 'lbank logo', link: 'https://www.lbank.com/trade/kendu_usdt' },
    { src: 'https://clickmortarlibrary.nyc3.cdn.digitaloceanspaces.com/Kendu/CEX-Icons/mexc-logo.svg', description: 'mexc logo', link: 'https://www.mexc.com/exchange/KENDU_USDT' },
    { src: 'https://clickmortarlibrary.nyc3.cdn.digitaloceanspaces.com/Kendu/CEX-Icons/bitmart-logo.svg', description: 'bitmart logo', link: 'https://www.bitmart.com/trade/en-US?symbol=KENDU_USDT&layout=basic&%3Fr=Ppnxq3&type=null' },
    { src: 'https://clickmortarlibrary.nyc3.cdn.digitaloceanspaces.com/Kendu/CEX-Icons/poloniex-logo.svg', description: 'poloniex logo', link: 'https://poloniex.com/trade/KENDU_USDT/?type=spot' },
    { src: 'https://clickmortarlibrary.nyc3.cdn.digitaloceanspaces.com/Kendu/CEX-Icons/azbit-logo.svg', description: 'azbit logo', link: 'https://azbit.com/exchange/KENDU_USDT' },
    { src: 'https://clickmortarlibrary.nyc3.cdn.digitaloceanspaces.com/Kendu/CEX-Icons/fameex-logo.svg', description: 'fame ex logo', link: 'https://www.fameex.com/en-US/grid/kendu-usdt' },
    { src: 'https://clickmortarlibrary.nyc3.cdn.digitaloceanspaces.com/Kendu/CEX-Icons/biconomy-logo.svg', description: 'biconomy logo', link: 'https://www.biconomy.com/exchange/KENDU_USDT' },
    { src: 'https://clickmortarlibrary.nyc3.cdn.digitaloceanspaces.com/Kendu/CEX-Icons/bigone-logo.svg', description: 'big one logo', link: 'https://big.one/en/trade/KENDU-USDT' },
    { src: 'https://clickmortarlibrary.nyc3.cdn.digitaloceanspaces.com/Kendu/CEX-Icons/coinex-logo.svg', description: 'coinex logo', link: 'https://www.coinex.com/en/exchange/kendu-usdt' },
    { src: 'https://clickmortarlibrary.nyc3.cdn.digitaloceanspaces.com/Kendu/CEX-Icons/bilaxy-logo.svg', description: 'bilaxy logo', link: 'https://m.bilaxy.com/swap/ethereum/0xaa95f26e30001251fb905d264Aa7b00eE9dF6C18' },
    { src: 'https://clickmortarlibrary.nyc3.cdn.digitaloceanspaces.com/Kendu/CEX-Icons/bingx-logo.svg', description: 'bing x logo', link: 'https://bingx.com/ku-ku/spot/KENDUUSDT/' },
    { src: 'https://clickmortarlibrary.nyc3.cdn.digitaloceanspaces.com/Kendu/CEX-Icons/grovex-logo.svg', description: 'grove x logo', link: 'https://www.grovex.io/en_US/trade/KENDU_USDT' },
    { src: 'https://clickmortarlibrary.nyc3.cdn.digitaloceanspaces.com/Kendu/CEX-Icons/probit-logo.svg', description: 'probit logo', link: 'https://www.probit.com/app/exchange/KENDU-USDT' },
    { src: 'https://clickmortarlibrary.nyc3.cdn.digitaloceanspaces.com/Kendu/CEX-Icons/superex-logo.svg', description: 'super ex logo', link: 'https://www.superex.com/trade/KENDU_USDT' },
];

const carouselTrack = document.querySelector('.carousel-track');

const createSlide = ({ src, description, link }) => {
    const slideElement = document.createElement('div');
    slideElement.className = 'slide';

    const linkElement = document.createElement('a');
    linkElement.href = link;
    linkElement.target = '_blank';

    const imgElement = document.createElement('img');
    imgElement.src = src;
    imgElement.alt = description;

    const overlayElement = document.createElement('div');
    overlayElement.className = 'overlay';
    overlayElement.textContent = description;

    linkElement.append(imgElement, overlayElement);
    slideElement.appendChild(linkElement);

    return slideElement;  // Ensure return is within function scope
};

const populateCarouselTrack = (slides) => {
    const fragment = document.createDocumentFragment();
    slides.forEach(slide => fragment.appendChild(createSlide(slide)));

    // Duplicate slides to create a seamless loop effect
    slides.forEach(slide => fragment.appendChild(createSlide(slide)));

    carouselTrack.appendChild(fragment);

    const slideWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--slide-width'));
    const gapWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--gap-width'));
    const totalWidth = (slideWidth + gapWidth) * slides.length;
    const duplicatedTotalWidth = totalWidth * 2;
    const halfTotalWidth = duplicatedTotalWidth / 2;

    carouselTrack.style.setProperty('--total-width', `${halfTotalWidth}px`);

    const baseDuration = 10000; // seconds | default = 40
    const baseWidth = 500000; // px | default = 5000
    const scrollDuration = (halfTotalWidth / baseWidth) * baseDuration;

    carouselTrack.style.setProperty('--scroll-duration', `${scrollDuration}s`);
};

document.addEventListener('DOMContentLoaded', () => {
    populateCarouselTrack(slidesData);
});

