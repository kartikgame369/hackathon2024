// Bike data
const bikes = [
    {
      image: 'bike1.jpg',
      brand: 'Honda',
      model: 'CBR 1000RR',
      engine: '999 cc',
      power: '191 hp',
      torque: '116 Nm',
      price: '$16,499'
    },
    {
      image: 'bike2.jpg',
      brand: 'Yamaha',
      model: 'YZF-R6',
      engine: '599 cc',
      power: '117 hp',
      torque: '61.7 Nm',
      price: '$12,199'
    }
  ];
  
  // Car data
  const cars = [
    {
      image: 'car1.jpg',
      brand: 'Toyota',
      model: 'Corolla',
      engine: '1.8L Inline-4',
      power: '139 hp',
      torque: '126 lb-ft',
      price: '$20,025'
    },
    {
      image: 'car2.jpg',
      brand: 'Ford',
      model: 'Mustang',
      engine: '5.0L V8',
      power: '460 hp',
      torque: '420 lb-ft',
      price: '$42,215'
    }
  ];
  
  // Function to create showcase content
  function createShowcase(containerId, vehicles) {
    const container = document.getElementById(containerId);
    vehicles.forEach(vehicle => {
      const { image, brand, model, engine, power, torque, price } = vehicle;
      const specHTML = `
        <div class="specifications">
          <h3>${brand} ${model}</h3>
          <ul>
            <li>Engine: ${engine}</li>
            <li>Power: ${power}</li>
            <li>Torque: ${torque}</li>
            <li>Price: ${price}</li>
          </ul>
        </div>
      `;
      const imageHTML = `<img src="${image}" alt="${brand} ${model}">`;
      container.innerHTML += `<div class="vehicle-container">${specHTML}${imageHTML}</div>`;
    });
  }
  
  // Call the function to create showcase for bikes and cars
  createShowcase('bikeShowcase', bikes);
  createShowcase('carShowcase', cars);
  