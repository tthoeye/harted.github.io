function Canvas(){
  var background = $('#background')[0];
  var c_logo = $('#center_logo')[0];
  var b = background.getContext('2d');
  var cl = c_logo.getContext('2d');

  var dPR = window.devicePixelRatio
  console.log('window.devicePixelRatio: ' + dPR)
  var iW = window.innerWidth
  var iH = window.innerHeight
  var iWdPR = window.innerWidth*dPR
  var iHdPR = window.innerHeight*dPR

  background.width = iWdPR
  background.style.width = iW + 'px'
  background.height = iHdPR
  background.style.height = iH + 'px'

  c_logo.width = iWdPR
  c_logo.style.width = iW + 'px'
  c_logo.height = iHdPR
  c_logo.style.height = iH + 'px'


  var deg = Math.PI / 180
  var cir = Math.PI * 2

  //pixelRatio compensation
  cl.translate(iWdPR/2,iHdPR/2)
  cl.scale(dPR,dPR)
  cl.translate(-iWdPR/2,-iHdPR/2)
  b.translate(b.width/2,b.width/2)
  b.scale(dPR,dPR)
  b.translate(-b.width/2,-b.width/2)

  //DrawHex(cl, 6, logo_size/2, c_logo.width/2, c_logo.height/2)

  var LogoBorder = {
    context: b,
    sides: 6,
    radius_div: 8,
    size: function(){return logo_size/10 * Math.random()},
    xcenter: function(){return iW * Math.random()},
    ycenter: function(){return iH * Math.random()},
    fill: {
      on: false,
      color: undefined,
    },
    border: {
      on: true,
      color: "#3E3E3E",
      linediv: 15,
    },
    linewidth: function(){return this.size()/30},
  }

  var LogoFill = {
    context: b,
    sides: 6,
    radius_div: 8,
    size: function(){return logo_size/10 * Math.random()},
    xcenter: function(){return iW * Math.random()},
    ycenter: function(){return iH * Math.random()},
    fill: {
      on: true,
      color:  "#3E3E3E",
    },
    border: {
      on: false,
      color: undefined,
      linediv: undefined,
    },
  }

  for (var i = 1; i <= 50 ; i++) {
    DrawHex(LogoBorder)
    DrawHex(LogoFill)
  }

  var CenterLogoBorder = {
    context: cl,
    sides: 6,
    radius_div: 8,
    size: function(){return (logo_size/2)*1.02},
    xcenter: function(){return c_logo.width/2},
    ycenter: function(){return c_logo.height/2},
    fill: {
      on: false,
      color:  undefined,
    },
    border: {
      on: true,
      color: "#3E3E3E",
      linediv: 60,
    },
  }

  var CenterLogoFill = {
    context: cl,
    sides: 6,
    radius_div: 8,
    size: function(){return (logo_size/2)*0.97},
    xcenter: function(){return c_logo.width/2},
    ycenter: function(){return c_logo.height/2},
    fill: {
      on: true,
      color:  '#3E3E3E',
    },
    border: {
      on: false,
      color: undefined,
      linediv: undefined,
    },
  }

  DrawHex(CenterLogoBorder)
  DrawHex(CenterLogoFill)

  for (var i = 1; i <= 50 ; i++) {
    DrawHex(LogoBorder)
    DrawHex(LogoFill)
  }

  function DrawHex(id){
    //variables
    this.c = id.context
    this.sides = id.sides
    this.size = id.size()
    this.radius = id.radius_div
    this.xc = id.xcenter()
    this.xy = id.ycenter()

    this.x1 = this.xc +  (this.size * Math.cos((180/this.sides)*deg)) * Math.cos(cir/(this.sides*2))
    this.y1 = this.xy +  (this.size * Math.cos((180/this.sides)*deg)) * Math.sin(cir/(this.sides*2))

    //transform
    this.c.save()
    this.c.translate(this.xc,this.xy)
    this.c.scale(1.05,1)
    this.c.rotate(180/this.sides*deg)
    this.c.translate(-this.xc,-this.xy)

    this.c.beginPath();
    this.c.moveTo (this.x1 , this.y1);

    for (var i = 2; i <= (this.sides) + 1; i++) {
        this.x1 = this.xc + this.size * Math.cos((i-1) * cir / (this.sides))
        this.y1 = this.xy + this.size * Math.sin((i-1) * cir / (this.sides))
        this.x2 = this.xc + this.size * Math.cos((i) * cir / (this.sides))
        this.y2 = this.xy + this.size * Math.sin((i) * cir / (this.sides))
        this.c.arcTo (this.x1, this.y1, this.x2, this.y2, this.size/this.radius);
    }
    this.c.closePath()
    this.c.strokeStyle = id.border.color
    this.c.lineWidth = this.size/id.border.linediv
    this.c.fillStyle = id.fill.color

    if (id.border.on == true) { this.c.stroke() }
    if (id.fill.on == true) { this.c.fill() }

    this.c.restore()

  }


  // animate();
  // function animate(){
  //   requestAnimationFrame(animate);
  // }



};
