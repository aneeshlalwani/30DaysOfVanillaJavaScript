const inputs = document.querySelectorAll('.controls input');

function handleUPdate() {
    // console.log(this.value);
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUPdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUPdate));