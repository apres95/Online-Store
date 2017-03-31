// product constructor
function Shirt(name, size, color, stock, image) {
	this.name  = name
	this.size  = size
	this.color = color
	this.stock = stock
	this.image = image
}

// create new products from the product constructor
var whitetee  = new Shirt("White Tee", "medium", "white", 150, "img/whitetee.png")
var blacktee  = new Shirt("Black Tee", "medium", "Black", 50, "img/blacktee.png")
var redtee    = new Shirt("Red Tee", "large", "red", 20, "img/redtee.png")
var bluetee   = new Shirt("Blue Tee", "small", "blue", 70, "img/bluetee.png")
var greentee  = new Shirt("Green Tee", "large", "green", 55, "img/greentee.png")
var yellowtee = new Shirt("Yellow Tee", "medium", "yellow", 250, "img/yellowtee.png")

// create an array to add products to
var shirtArray = new Array

// add products to array of products
shirtArray.push(whitetee, blacktee, redtee, bluetee, greentee, yellowtee)

function modalShirt(modalname, modalsize, modalcolor, modalstock, modalimage) {
	this.modalname  = modalname
	this.modalsize  = modalsize
	this.modalcolor = modalcolor
	this.modalstock = modalstock
	this.modalimage = modalimage
}

// create new products from the product constructor
var modalwhitetee  = new modalShirt("White Tee", "medium", "white", 150, "img/whitetee.png")
var modalblacktee  = new modalShirt("Black Tee", "medium", "Black", 50, "img/blacktee.png")
var modalredtee    = new modalShirt("Red Tee", "large", "red", 20, "img/redtee.png")
var modalbluetee   = new modalShirt("Blue Tee", "small", "blue", 70, "img/bluetee.png")
var modalgreentee  = new modalShirt("Green Tee", "large", "green", 55, "img/greentee.png")
var modalyellowtee = new modalShirt("Yellow Tee", "medium", "yellow", 250, "img/yellowtee.png")

var modalshirtArray = new Array

// add products to array of products
modalshirtArray.push(modalwhitetee, modalblacktee, modalredtee, modalbluetee, modalgreentee, modalyellowtee)

// loop through products array
for(var i = 0; i < shirtArray.length; i++) {
	// create new elements for each product
	var newItem  = document.createElement("div")
	var newDiv   = document.createElement("div")
	var nameH1   = document.createElement("h1")
	var sizeH4   = document.createElement("h4")
	var colorH4  = document.createElement("h4")
	var stockH4  = document.createElement("h4")
	var btn      = document.createElement("button")
	var image    = document.createElement("img")
	var modalnameH1   = document.createElement("h1")
	var modalsizeH4   = document.createElement("h4")
	var modalcolorH4  = document.createElement("h4")
	var modalstockH4  = document.createElement("h4")
	var modalbtn      = document.createElement("button")
	var modalimage    = document.createElement("img")
	var modal = document.createElement("div")
	var modalContent = document.createElement("div")
	var modalHeader = document.createElement("div")
	var modalBody = document.createElement("div")
	var modalFooter = document.createElement("div")

	// create text for new elements
	var tName   = document.createTextNode(shirtArray[i].name)
	var tSize   = document.createTextNode("Available size: " + shirtArray[i].size)
	var tColor  = document.createTextNode("Color: " + shirtArray[i].color)
	var tStock  = document.createTextNode("In stock: " + shirtArray[i].stock)
	var tButton = document.createTextNode("Buy Now!")

	var modaltName   = document.createTextNode(modalshirtArray[i].modalname)
	var modaltSize   = document.createTextNode("Available size: " + modalshirtArray[i].modalsize)
	var modaltColor  = document.createTextNode("Color: " + modalshirtArray[i].modalcolor)
	var modaltStock  = document.createTextNode("In stock: " + modalshirtArray[i].modalstock)
	var modaltButton = document.createTextNode("Buy Now!")

	// update source attribute
	image.src = shirtArray[i].image

	modalimage.src = shirtArray[i].image

	// update class attributes
	image.className = "img-responsive"
	btn.className = "btn btn-primary btn-lg"	
	modalimage.className = "img-responsive"
	modalbtn.className = "btn btn-primary btn-lg"

	newItem.className = "col-sm-4"
	newDiv.className = "tshirt shirtName" + [i] 
	modal.className = "modal fade"
	modalContent.className = "col-lg-3"
	modalHeader.className = "modal-header"
	
	// add text to elements
	nameH1.appendChild(tName)
	sizeH4.appendChild(tSize)
	colorH4.appendChild(tColor)
	stockH4.appendChild(tStock)
	btn.appendChild(tButton)

	modalnameH1.appendChild(modaltName)
	modalsizeH4.appendChild(modaltSize)
	modalcolorH4.appendChild(modaltColor)
	modalstockH4.appendChild(modaltStock)
	modalbtn.appendChild(modaltButton)



	// add elements to new div
	newDiv.appendChild(nameH1)
	newDiv.appendChild(image)
	newDiv.appendChild(sizeH4)
	newDiv.appendChild(colorH4)
	newDiv.appendChild(stockH4)
	newDiv.appendChild(btn)

	// add new div to new item div
	newItem.appendChild(newDiv)
	modalHeader.appendChild(modalnameH1)
	modalBody.appendChild(modalimage)
	modalBody.appendChild(modalsizeH4)
	modalBody.appendChild(modalcolorH4)
	modalBody.appendChild(modalstockH4)
	modalFooter.appendChild(modalbtn)

	modalContent.appendChild(modalHeader)
	modalContent.appendChild(modalBody)
	modalContent.appendChild(modalFooter)
	modal.appendChild(modalContent)

	$(btn).click(function(){
        $(modal).modal();
    });

	// add new item to the element with id="shirts"
	document.getElementById("products").appendChild(newItem)
}
