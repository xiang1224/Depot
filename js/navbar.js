class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <header>
        <nav class="navbar navbar-expand-lg ">
            <a class="navbar-brand" href="index.html"><img src="img/icon.png" style="width: 100px;"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">最新消息</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownCars" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            車種分類
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownCars">
                            <li><a class="dropdown-item" href="racingcar.html">跑車</a></li>
                            <li><a class="dropdown-item" href="#">轎車</a></li>
                            <li><a class="dropdown-item" href="#">機車</a></li>
                            <!-- Add more items here if needed -->
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownAbout" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            關於我們
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownAbout">
                            <li><a class="dropdown-item" href="team.html">團隊介紹</a></li>
                            <li><a class="dropdown-item" href="company.html">公司歷程</a></li>
                            <li><a class="dropdown-item" href="service.html">服務宗旨</a></li>
                            <!-- Add more items here if needed -->
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </header>`;
    }
}

customElements.define('my-header', MyHeader)

