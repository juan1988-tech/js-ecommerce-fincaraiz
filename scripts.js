const Data = [
  { 
    urlImage: 'url(./assets/homes/casa-1-1.jpg)',
    stateHomeText: 'En Arrendamiento',
    HomeTitleText:  'Elíxires del rincón',
    HomeSubTitleText: 'Suba, Bogotá',
    PropertyNamePText:'Sky Apartments de la Holla',
    PropertyBedroomsPText: "3 habitaciones",
    PropertyMeasurePText: "76 m2",
    PropertyBathroomsPText: "3 baños"
  },
  {
    urlImage: 'url(./assets/homes/casa-2-1.jpg)',
    stateHomeText: 'En Venta',
    HomeTitleText:  ' Cañiza de la olla',
    HomeSubTitleText: 'Centro, Bogotá',
    PropertyNamePText:'Cerros de la palma',
    PropertyBedroomsPText: "2 habitaciones",
    PropertyMeasurePText: "120 m2",
    PropertyBathroomsPText: "3 baños"
  },
  {
    urlImage: 'url(./assets/homes/casa-3-1.jpg)',
    stateHomeText: 'En Arrendamiento',
    HomeTitleText:  'Altos del sumapáz',
    HomeSubTitleText: 'Alamos, Bogotá',
    PropertyNamePText:'El rincón de la patraña',
    PropertyBedroomsPText: "2 habitaciones",
    PropertyMeasurePText: "300 m2",
    PropertyBathroomsPText: "2 baños"
  },
];

const lastPropertiesContainer = document.querySelector('#last-properties-container');
function Home(urlImage,stateHomeText,HomeTitleText,HomeSubTitleText,PropertyNamePText,PropertyBedroomsPText, PropertyMeasurePText, PropertyBathroomsPText){
  const newHome = document.createElement('article'); 
  newHome.className = 'last-property';
  lastPropertiesContainer.appendChild(newHome);

  const nabvarHomePhoto = document.createElement('div');
  nabvarHomePhoto.className = "navbar-home-photo";
  nabvarHomePhoto.style.backgroundImage =  urlImage;

  const stateHome = document.createElement('div');
  stateHome.className = "state-home";
  const stateHomeP = document.createElement('p');
  stateHomeP.className = "p-small-bold p-small-state";
  stateHomeP.innerHTML = stateHomeText;
  stateHome.appendChild(stateHomeP);

  const pointsNavbarHome = document.createElement('div');
  pointsNavbarHome.className = 'points-nabvar-home';
  const pointsItems = [];
  for(let i=0;i<3;i++){
    const pointNavbar =  document.createElement('span');
    pointNavbar.className = 'point-nabvar-home';
  pointsItems.push(pointNavbar); 
  }
  pointsNavbarHome.append(...pointsItems);

  nabvarHomePhoto.append(stateHome,pointsNavbarHome);

  const HomeTitle = document.createElement('h3');
  HomeTitle.className = 'h3-bold-title home-title';
  HomeTitle.innerHTML = HomeTitleText;

  const HomeSubtitle = document.createElement('p');
  HomeSubtitle.className = 'p-medium-bold home-subtitle';
  HomeSubtitle.innerHTML = HomeSubTitleText;

  const LastPropertyDescription = document.createElement('div');
  LastPropertyDescription.className = 'last-property-description';

  const PropertyNameLogo = document.createElement('span');
  PropertyNameLogo.className ="property-name-logo";

  const PropertyNameP = document.createElement('p');
  PropertyNameP.className = "p-medium-regular property-name-p";
  PropertyNameP.innerHTML = PropertyNamePText;

  const PropertyBedroomsLogo = document.createElement('span');
  PropertyBedroomsLogo.className = 'property-bedrooms-logo';

  const PropertyBedroomsP = document.createElement('p');
  PropertyBedroomsP.className = "p-medium-regular property-bedrooms-p";
  PropertyBedroomsP.innerHTML = PropertyBedroomsPText;

  const PropertyMeasureLogo = document.createElement('span');
  PropertyMeasureLogo.className ="property-measure-logo";

  const PropertyMeasureP = document.createElement('p');
  PropertyMeasureP.className = "p-medium-regular property-measure-p"
  PropertyMeasureP.innerHTML = PropertyMeasurePText;

  const PropertyBathroomsLogo = document.createElement('span');
  PropertyBathroomsLogo.className = "property-bathrooms-logo";

  const PropertyBathroomsP = document.createElement('p');
  PropertyBathroomsP.className ="p-medium-regular property-bathrooms-p";
  PropertyBathroomsP.innerHTML = PropertyBathroomsPText;
  LastPropertyDescription.append(PropertyNameLogo,PropertyNameP,PropertyBedroomsLogo,PropertyBedroomsP,PropertyMeasureLogo,PropertyMeasureP,PropertyBathroomsLogo,PropertyBathroomsP);

  const ButtonActionCellPhone = document.createElement('a');
  ButtonActionCellPhone.className = "p-medium-bold button-action-cellphone";
  ButtonActionCellPhone.innerHTML = "Ver Inmueble";
  ButtonActionCellPhone.href = "/casa-1";
  newHome.append(nabvarHomePhoto,HomeTitle,HomeSubtitle,LastPropertyDescription,ButtonActionCellPhone);
}


for(let i=0;i<=3;i++){
  Home(
    Data[i].urlImage,
    Data[i].stateHomeText,
    Data[i].HomeTitleText,
    Data[i].HomeSubTitleText,
    Data[i].PropertyNamePText,
    Data[i].PropertyBedroomsPText, 
    Data[i].PropertyMeasurePText, 
    Data[i].PropertyBathroomsPText
  )
}


