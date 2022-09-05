 const Data = [
  { 
    urlImage1: 'url(./assets/homes/casa-1-1.jpg)',
    urlImage2: 'url(./assets/homes/casa-1-2.jpg)',
    urlImage3: 'url(./assets/homes/casa-1-3.jpg)',
    stateHomeText: 'En Arrendamiento',
    HomeTitleText:  'Elíxires del rincón',
    HomeSubTitleText: 'Suba, Bogotá',
    PropertyNamePText:'Sky Apartments de la Holla',
    PropertyBedroomsPText: "3 habitaciones",
    PropertyMeasurePText: "76 m2",
    PropertyBathroomsPText: "3 baños"
  },
  {
    urlImage1: 'url(./assets/homes/casa-2-1.jpg)',
    urlImage2: 'url(./assets/homes/casa-2-2.jpg)',
    urlImage3: 'url(./assets/homes/casa-2-3.jpg)',
    stateHomeText: 'En Venta',
    HomeTitleText:  ' Cañiza de la olla',
    HomeSubTitleText: 'Centro, Bogotá',
    PropertyNamePText:'Cerros de la palma',
    PropertyBedroomsPText: "2 habitaciones",
    PropertyMeasurePText: "120 m2",
    PropertyBathroomsPText: "3 baños"
  },
  {
    urlImage1: 'url(./assets/homes/casa-3-1.jpg)',
    urlImage2: 'url(./assets/homes/casa-3-2.jpg)',
    urlImage3: 'url(./assets/homes/casa-3-3.jpg)',
    stateHomeText: 'En Arrendamiento',
    HomeTitleText:  'Altos del sumapáz',
    HomeSubTitleText: 'Alamos, Bogotá',
    PropertyNamePText:'El rincón de la patraña',
    PropertyBedroomsPText: "2 habitaciones",
    PropertyMeasurePText: "300 m2",
    PropertyBathroomsPText: "2 baños"
  },
  {
    urlImage1: 'url(./assets/homes/casa-4-1.jpg)',
    urlImage2: 'url(./assets/homes/casa-4-2.jpg)', 
    urlImage3: 'url(./assets/homes/casa-4-3.jpg)',
    stateHomeText: 'En Venta',
    HomeTitleText:  'Altos de la chicha',
    HomeSubTitleText: 'La palma, Bogotá',
    PropertyNamePText:'Altos de la conejera',
    PropertyBedroomsPText: "3 habitaciones",
    PropertyMeasurePText: "550 m2",
    PropertyBathroomsPText: "3 baños"
  },
  {
    urlImage1: 'url(./assets/homes/casa-5-1.jpg)',
    urlImage2: 'url(./assets/homes/casa-5-2.jpg)',
    urlImage3: 'url(./assets/homes/casa-5-3.jpg)',
    stateHomeText: 'En Venta',
    HomeTitleText:  'Altos de la chicha',
    HomeSubTitleText: 'La palma, Bogotá',
    PropertyNamePText:'Altos de la conejera',
    PropertyBedroomsPText: "3 habitaciones",
    PropertyMeasurePText: "550 m2",
    PropertyBathroomsPText: "3 baños"
  },
  {
    urlImage1: 'url(./assets/homes/casa-6-1.jpg)',
    urlImage2: 'url(./assets/homes/casa-6-2.jpg)',
    urlImage3: 'url(./assets/homes/casa-6-3.jpg)',
    stateHomeText: 'En Arrendamiento',
    HomeTitleText:  'Altos de la chicharita',
    HomeSubTitleText: 'La plata, Bogotá',
    PropertyNamePText:'Altos de la ezperanza',
    PropertyBedroomsPText: "4 habitaciones",
    PropertyMeasurePText: "410 m2",
    PropertyBathroomsPText: "2 baños"
  },
  {
    urlImage1: 'url(./assets/homes/casa-7-1.jpg)',
    urlImage2: 'url(./assets/homes/casa-7-2.jpg)',
    urlImage3: 'url(./assets/homes/casa-7-3.jpg)',
    stateHomeText: 'En Arrendamiento',
    HomeTitleText:  'Las lajas de la montaña',
    HomeSubTitleText: 'Chapinero Alto, Bogotá',
    PropertyNamePText:'Altos de la ezperanza',
    PropertyBedroomsPText: "4 habitaciones",
    PropertyMeasurePText: "410 m2",
    PropertyBathroomsPText: "2 baños"
  },
  {
    urlImage1: 'url(./assets/homes/casa-8-1.jpg)',
    urlImage2: 'url(./assets/homes/casa-8-2.jpg)',
    urlImage3: 'url(./assets/homes/casa-8-3.jpg)',
    stateHomeText: 'En Venta',
    HomeTitleText:  'Las lajas de la montaña',
    HomeSubTitleText: 'Chapinero Bajo, Bogotá',
    PropertyNamePText:'Altos de la estimación',
    PropertyBedroomsPText: "4 habitaciones",
    PropertyMeasurePText: "400 m2",
    PropertyBathroomsPText: "1 baño"
  },
  {
    urlImage1: 'url(./assets/homes/casa-9-1.jpg)',
    urlImage2: 'url(./assets/homes/casa-9-2.jpg)',
    urlImage3: 'url(./assets/homes/casa-9-3.jpg)',
    stateHomeText: 'En Arrendamiento',
    HomeTitleText:  'Las lajas de la montaña',
    HomeSubTitleText: 'Chapinero Bajo, Bogotá',
    PropertyNamePText:'Altos de la estimación',
    PropertyBedroomsPText: "4 habitaciones",
    PropertyMeasurePText: "400 m2",
    PropertyBathroomsPText: "3 baños"
  }
];

const lastPropertiesContainer = document.getElementById('last-properties-container');

function lastProperty(
  index,
  salesState,
  homeImageOneId,
  homeImageTwoId,
  homeImageThreeId,
  lastPropertyTitle,
  lastPropertySubTitle,
  propertyNameP,
  propertyBedroomsP,
  propertyMeasureP,
  propertyBathroomsP,
  ){
  this.index = index;
  
  this.salesState = salesState;
  const psalesState = document.getElementById(salesState);
  psalesState.innerHTML = Data[index].stateHomeText;

  this.homeImageOneId = homeImageOneId;
  const homeImageOne =  document.getElementById(homeImageOneId);
  homeImageOne.style.backgroundImage = Data[index].urlImage1;

  this.homeImageTwoId = homeImageTwoId;
  const homeImageTwo = document.getElementById(homeImageTwoId);
  homeImageTwo.style.backgroundImage = Data[index].urlImage2;

  this.homeImageThreeId = homeImageThreeId; 
  const homeImageThree = document.getElementById(homeImageThreeId);
  homeImageThree.style.backgroundImage = Data[index].urlImage3;

  this.lastPropertyTitle = lastPropertyTitle;
  const propertyTitle = document.getElementById(lastPropertyTitle);
  propertyTitle.innerHTML = Data[index].HomeTitleText;

  this.lastPropertySubTitle = lastPropertySubTitle;
  const propertySubTitle = document.getElementById(lastPropertySubTitle);
  propertySubTitle.innerHTML = Data[index].HomeSubTitleText;  

  this.propertyNameP = propertyNameP;
  const propertyName = document.getElementById(propertyNameP);
  propertyName.innerHTML = Data[index].PropertyNamePText;

  this.propertyBedroomsP = propertyBedroomsP;
  const propertyBedrooms = document.getElementById(propertyBedroomsP);
  propertyBedrooms.innerHTML = Data[index].PropertyBedroomsPText;
  
  this.propertyMeasureP = propertyMeasureP;
  const propertyMeasure = document.getElementById(propertyMeasureP);
  propertyMeasure.innerHTML = Data[index].PropertyMeasurePText; 

  this.propertyBathroomsP = propertyBathroomsP;
  const propertyBathrooms = document.getElementById(propertyBathroomsP);
  propertyBathrooms.innerHTML = Data[index].PropertyBathroomsPText;  
}

const casa1 = new lastProperty(0,'p-sales-state-1','home-1-image-1','home-1-image-2','home-1-image-3','last-properties-title-1','last-properties-subtitle-1','property-name-p-1','property-bedrooms-p-1','property-measure-p-1','property-bathrooms-p-1');
const casa2 = new lastProperty(1,'p-sales-state-2','home-2-image-1','home-2-image-2','home-2-image-3','last-properties-title-2','last-properties-subtitle-2','property-name-p-2','property-bedrooms-p-2','property-measure-p-2','property-bathrooms-p-2');
const casa3 = new lastProperty(2,'p-sales-state-3','home-3-image-1','home-3-image-2','home-3-image-3','last-properties-title-3','last-properties-subtitle-3','property-name-p-3','property-bedrooms-p-3','property-measure-p-3','property-bathrooms-p-3');


