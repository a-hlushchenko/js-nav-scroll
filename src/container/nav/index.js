class Nav {
    static #HOME_PAGE = 'http://localhost:3000/';

    static #back = () => {
        history.back();
    }

    static #forward = () => {
        history.forward();
    }

    static #reload = () => {
        location.reload();
    }

    static #changePage = (href) => {
        location.assign(href);
    }

    static #home = () => {
        this.#changePage(this.#HOME_PAGE);
    }

    static #go = () => {
        try {
            const url = new URL(input.value);
            this.#changePage(url.href);
        } catch (e) {
            alert('Введіть коректну url адресу')
        }
        
    }
    static init = () => {
        back.onclick = this.#back;
        forward.onclick = this.#forward;
        reload.onclick = this.#reload;
        home.onclick = this.#home;
        go.onclick = this.#go;

        input.value = location.href;
    }
}

Nav.init();