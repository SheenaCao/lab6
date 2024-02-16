document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('lastModified').textContent = new Date(document.lastModified).toLocaleString();
    
    document.getElementById('loadMore').addEventListener('click', function() {
        const productHTML = `
            <div class="product3">
                <a href="https://www.amazon.com/SIHOO-Ergonomic-Armrests-Computer-Adjustable/dp/B0CLLRNFB8?ref_=ast_sto_dp" target="_blank">
                    <img src="chair3.jpg" alt="SIHOO M102C Ergonomic Mesh Office Chair" style="width:100%; height:auto;">
                    <h4>SIHOO M102C Ergonomic Mesh Office Chair</h4>
                    <p>Ergonomic chair with adjustable headrest, lumbar support, and flip-up armrests.</p>
                </a>
            </div>
        `;
        document.querySelector('.products').insertAdjacentHTML('beforeend', productHTML);
    });
});

