// TRANSITION FOR IMAGES
    const panels = document.querySelectorAll('.panel');
    function toggleOpen(){
      this.classList.toggle('open');
    }
    panels.forEach(panel => 
        panel.addEventListener('click', toggleOpen)
    );
    // TRANSITION FOR TEXT
    function toggleActive(e){
      if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active')}
    }
    panels.forEach(panel =>
        panel.addEventListener('transitionend', toggleActive)
      );