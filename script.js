class IphoneChange {

    constructor() {
        this.color = document.querySelectorAll('.color')
        this.circle = document.querySelector('#circle')
        this.phone = document.querySelector('#phone')
        this.teste()
    }

    teste() {
        document.addEventListener('click', (e) => {
            const el = e.target
            if (el.classList.contains('green')) {
                this.circle.style.background = '#384937'
                this.phone.src = 'img/green.png'
            }
            if (el.classList.contains('pink')) {
                this.circle.style.background = '#ffc9cf'
                this.phone.src = 'img/pink.png'
            }
            if (el.classList.contains('blue')) {
                this.circle.style.background = '#225f7e'
                this.phone.src = 'img/blue.png'
            }
            if (el.classList.contains('black')) {
                this.circle.style.background = '#192028'
                this.phone.src = 'img/black.png'
            }
            if (el.classList.contains('white')) {
                this.circle.style.background = '#f7f2ee'
                this.phone.src = 'img/white.png'
            }
            if (el.classList.contains('red')) {
                this.circle.style.background = '#ae0617'
                this.phone.src = 'img/red.png'
            }
        })
    }

}

const iphone = new IphoneChange()