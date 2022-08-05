function Home(urlImage,stateHomeText,HomeTitleText,HomeSubTitleText,PropertyNamePText,PropertyBedroomsPText, PropertyMeasurePText, PropertyBathroomsPText){
  const lastPropertiesContainer = document.querySelector('#last-properties-container');
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
    const pointNavbar =  document.createElement('span');11
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

Home('url(./assets/homes/casa-1-1.jpg)','En Arrendamiento','Elíxires del rincón','Suba, Bogotá','Sky Apartments de la Holla',"3 habitaciones","76 m2","3 baños");




