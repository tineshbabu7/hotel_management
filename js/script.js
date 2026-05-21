const ADMIN_PASSWORD = "admin123";
const STORAGE_KEYS = {
  rooms: "hotelRooms",
  food: "hotelFood",
  bookings: "hotelBookings",
  messages: "hotelMessages",
  foodOrders: "hotelFoodOrders"
};

function getStorage(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch (error) {
    return [];
  }
}

function setStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function parseDate(dateString) {
  return new Date(`${dateString}T00:00:00`);
}

function datesOverlap(startA, endA, startB, endB) {
  return startA < endB && startB < endA;
}

function getDefaultRooms() {
  return [
    { id: 1, type: "Deluxe Room", description: "Comfortable air-conditioned room with a queen bed.", price: 3200, available: true },
    { id: 2, type: "Executive Suite", description: "Spacious suite with seating area and premium amenities.", price: 5200, available: true },
    { id: 3, type: "Family Room", description: "Large room for families with two beds and calming decor.", price: 4500, available: true },
    { id: 4, type: "Standard Room", description: "Cozy and affordable stay with essential comforts.", price: 2400, available: true }
  ];
}

function getDefaultFoods() {
  return [
    { id: 1, name: "Paneer Butter Masala", cuisine: "Indian", price: 285 },
    { id: 2, name: "Vegetable Biryani", cuisine: "Indian", price: 220 },
    { id: 3, name: "Butter Chicken", cuisine: "Indian", price: 340 },
    { id: 4, name: "Dal Makhani", cuisine: "Indian", price: 210 },
    { id: 5, name: "Chole Bhature", cuisine: "Indian", price: 190 },
    { id: 6, name: "Masala Dosa", cuisine: "Indian", price: 185 },
    { id: 7, name: "Kadai Paneer", cuisine: "Indian", price: 295 },
    { id: 8, name: "Fish Curry", cuisine: "Indian", price: 360 },
    { id: 9, name: "Mutton Rogan Josh", cuisine: "Indian", price: 450 },
    { id: 10, name: "Palak Paneer", cuisine: "Indian", price: 275 },
    { id: 11, name: "Tandoori Chicken", cuisine: "Indian", price: 380 },
    { id: 12, name: "Veg Pulao", cuisine: "Indian", price: 205 },
    { id: 13, name: "Rogan Josh", cuisine: "Indian", price: 430 },
    { id: 14, name: "Naan Basket", cuisine: "Indian", price: 140 },
    { id: 15, name: "Mango Lassi", cuisine: "Indian", price: 120 },
    { id: 16, name: "Chicken Fried Rice", cuisine: "Chinese", price: 260 },
    { id: 17, name: "Vegetable Spring Rolls", cuisine: "Chinese", price: 180 },
    { id: 18, name: "Sweet Corn Soup", cuisine: "Chinese", price: 140 },
    { id: 19, name: "Chili Paneer", cuisine: "Chinese", price: 290 },
    { id: 20, name: "Schezwan Fried Rice", cuisine: "Chinese", price: 270 },
    { id: 21, name: "Ginger Chicken", cuisine: "Chinese", price: 330 },
    { id: 22, name: "Honey Chilli Potato", cuisine: "Chinese", price: 210 },
    { id: 23, name: "Kung Pao Chicken", cuisine: "Chinese", price: 350 },
    { id: 24, name: "Manchow Soup", cuisine: "Chinese", price: 150 },
    { id: 25, name: "Veg Chow Mein", cuisine: "Chinese", price: 230 },
    { id: 26, name: "Mixed Vegetable Stir Fry", cuisine: "Chinese", price: 240 },
    { id: 27, name: "Pepper Chicken", cuisine: "Chinese", price: 340 },
    { id: 28, name: "Spring Onion Chicken", cuisine: "Chinese", price: 310 },
    { id: 29, name: "Mongolian Veg", cuisine: "Chinese", price: 300 },
    { id: 30, name: "Paneer Chili", cuisine: "Chinese", price: 270 },
    { id: 31, name: "Grilled Chicken", cuisine: "Continental", price: 420 },
    { id: 32, name: "Caesar Salad", cuisine: "Continental", price: 260 },
    { id: 33, name: "Pasta Alfredo", cuisine: "Continental", price: 290 },
    { id: 34, name: "Mushroom Risotto", cuisine: "Continental", price: 360 },
    { id: 35, name: "Grilled Fish", cuisine: "Continental", price: 410 },
    { id: 36, name: "Club Sandwich", cuisine: "Continental", price: 225 },
    { id: 37, name: "Roast Vegetable Bowl", cuisine: "Continental", price: 240 },
    { id: 38, name: "Beef Steak", cuisine: "Continental", price: 520 },
    { id: 39, name: "Garden Salad", cuisine: "Continental", price: 180 },
    { id: 40, name: "Tomato Bruschetta", cuisine: "Continental", price: 200 },
    { id: 41, name: "Fish and Chips", cuisine: "Continental", price: 365 },
    { id: 42, name: "Herbed Chicken", cuisine: "Continental", price: 395 },
    { id: 43, name: "Quinoa Salad", cuisine: "Continental", price: 260 },
    { id: 44, name: "Shrimp Pasta", cuisine: "Continental", price: 450 },
    { id: 45, name: "Veg Burger", cuisine: "Continental", price: 220 },
    { id: 46, name: "Aloo Tikki", cuisine: "Street Food", price: 95 },
    { id: 47, name: "Veg Momos", cuisine: "Street Food", price: 130 },
    { id: 48, name: "Pav Bhaji", cuisine: "Street Food", price: 160 },
    { id: 49, name: "Samosa", cuisine: "Street Food", price: 80 },
    { id: 50, name: "Pani Puri", cuisine: "Street Food", price: 120 },
    { id: 51, name: "Chaat Platter", cuisine: "Street Food", price: 145 },
    { id: 52, name: "Kathi Roll", cuisine: "Street Food", price: 170 },
    { id: 53, name: "Dahi Puri", cuisine: "Street Food", price: 135 },
    { id: 54, name: "Corn Chaat", cuisine: "Street Food", price: 125 },
    { id: 55, name: "Masala Corn", cuisine: "Street Food", price: 110 },
    { id: 56, name: "Keema Pav", cuisine: "Street Food", price: 180 },
    { id: 57, name: "Khakhra", cuisine: "Street Food", price: 85 },
    { id: 58, name: "Falafel Wrap", cuisine: "Street Food", price: 195 },
    { id: 59, name: "Mumbai Sandwich", cuisine: "Street Food", price: 150 },
    { id: 60, name: "Chicken Tikka Roll", cuisine: "Street Food", price: 210 }
  ];
}

function initializeData() {
  if (!localStorage.getItem(STORAGE_KEYS.rooms)) {
    setStorage(STORAGE_KEYS.rooms, getDefaultRooms());
  }

  const currentFood = getStorage(STORAGE_KEYS.food);
  if (!localStorage.getItem(STORAGE_KEYS.food) || !Array.isArray(currentFood) || currentFood.length < 40) {
    setStorage(STORAGE_KEYS.food, getDefaultFoods());
  }

  if (!localStorage.getItem(STORAGE_KEYS.bookings)) {
    setStorage(STORAGE_KEYS.bookings, []);
  }

  if (!localStorage.getItem(STORAGE_KEYS.foodOrders)) {
    setStorage(STORAGE_KEYS.foodOrders, []);
  }

  if (!localStorage.getItem(STORAGE_KEYS.messages)) {
    setStorage(STORAGE_KEYS.messages, []);
  }
}

function isRoomAvailable(roomId, checkInDate, checkOutDate) {
  const bookings = getStorage(STORAGE_KEYS.bookings).filter((booking) => booking.roomId === roomId && booking.status !== "Rejected");
  return !bookings.some((booking) => {
    const bookingIn = parseDate(booking.checkInDate);
    const bookingOut = parseDate(booking.checkOutDate);
    return datesOverlap(checkInDate, checkOutDate, bookingIn, bookingOut);
  });
}

  if (!localStorage.getItem(STORAGE_KEYS.bookings)) {
    setStorage(STORAGE_KEYS.bookings, []);
  }

  if (!localStorage.getItem(STORAGE_KEYS.messages)) {
    setStorage(STORAGE_KEYS.messages, []);
  }

function formatRupees(value) {
  return `₹${Number(value).toFixed(0)}`;
}

function findRoomById(id) {
  const rooms = getStorage(STORAGE_KEYS.rooms);
  return rooms.find((room) => room.id === Number(id));
}

function findBookingById(id) {
  const bookings = getStorage(STORAGE_KEYS.bookings);
  return bookings.find((booking) => booking.id === Number(id));
}

function renderMenuPage() {
  const menuList = document.getElementById("menuList");
  const filterButtons = document.querySelectorAll(".filter-button");
  const foodOrderSection = document.getElementById("foodOrderSection");
  const orderForm = document.getElementById("foodOrderForm");
  const orderItemName = document.getElementById("orderItemName");
  const orderGuestName = document.getElementById("orderGuestName");
  const orderGuestEmail = document.getElementById("orderGuestEmail");
  const orderQuantity = document.getElementById("orderQuantity");
  const orderMessage = document.getElementById("orderMessage");

  const foodItems = getStorage(STORAGE_KEYS.food);
  let selectedFood = null;

  function renderItems(cuisine) {
    const items = cuisine === "All" ? foodItems : foodItems.filter((item) => item.cuisine === cuisine);
    menuList.innerHTML = items.length
      ? items.map((item) => `
        <article class="food-card">
          <h3>${item.name}</h3>
          <span>${item.cuisine}</span>
          <p>Price: ${formatRupees(item.price)}</p>
          <button class="button button-secondary order-button" data-food-id="${item.id}">Request Order</button>
        </article>
      `).join("")
      : `<p>No menu items found for ${cuisine} cuisine.</p>`;

    menuList.querySelectorAll(".order-button").forEach((button) => {
      button.addEventListener("click", () => {
        const itemId = Number(button.dataset.foodId);
        selectedFood = foodItems.find((item) => item.id === itemId);
        if (!selectedFood) return;
        orderItemName.value = `${selectedFood.name} (${selectedFood.cuisine})`;
        orderQuantity.value = 1;
        orderGuestName.value = "";
        orderGuestEmail.value = "";
        orderMessage.textContent = "";
        foodOrderSection.classList.remove("hidden");
        foodOrderSection.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-button").forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      renderItems(button.dataset.cuisine);
    });
  });

  renderItems("All");

  orderForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!selectedFood) {
      orderMessage.textContent = "Please select a menu item first.";
      return;
    }

    const guestName = orderGuestName.value.trim();
    const guestEmail = orderGuestEmail.value.trim();
    const quantity = Number(orderQuantity.value);

    if (!guestName || !guestEmail || quantity < 1) {
      orderMessage.textContent = "Please complete all fields correctly.";
      return;
    }

    const foodOrders = getStorage(STORAGE_KEYS.foodOrders);
    const totalCost = selectedFood.price * quantity;

    foodOrders.push({
      id: Date.now(),
      guestName,
      guestEmail,
      foodId: selectedFood.id,
      foodName: selectedFood.name,
      cuisine: selectedFood.cuisine,
      quantity,
      totalCost,
      status: "Requested",
      submittedAt: new Date().toISOString()
    });
    setStorage(STORAGE_KEYS.foodOrders, foodOrders);

    orderMessage.textContent = `Request for ${selectedFood.name} has been sent to admin. Total: ${formatRupees(totalCost)}.`;
    orderForm.reset();
    orderItemName.value = "";
    selectedFood = null;
  });

  const cancelOrder = document.getElementById("cancelOrder");
  cancelOrder.addEventListener("click", () => {
    foodOrderSection.classList.add("hidden");
    orderForm.reset();
    orderMessage.textContent = "";
    selectedFood = null;
  });
}

function renderBookingPage() {
  const roomSelect = document.getElementById("roomSelect");
  const roomList = document.getElementById("roomList");
  const selectedPrice = document.getElementById("selectedPrice");
  const selectedTax = document.getElementById("selectedTax");
  const selectedTotal = document.getElementById("selectedTotal");
  const bookingForm = document.getElementById("bookingForm");
  const bookingMessage = document.getElementById("bookingMessage");
  const checkInDateInput = document.getElementById("checkInDate");
  const checkOutDateInput = document.getElementById("checkOutDate");

  function updateCheckoutMin() {
    if (!checkInDateInput.value) {
      checkOutDateInput.min = "";
      return;
    }
    const checkIn = parseDate(checkInDateInput.value);
    checkIn.setDate(checkIn.getDate() + 1);
    checkOutDateInput.min = checkIn.toISOString().split("T")[0];
    if (checkOutDateInput.value && parseDate(checkOutDateInput.value) <= parseDate(checkInDateInput.value)) {
      checkOutDateInput.value = "";
    }
  }

  function getSelectedDates() {
    if (!checkInDateInput.value || !checkOutDateInput.value) {
      return null;
    }
    const checkIn = parseDate(checkInDateInput.value);
    const checkOut = parseDate(checkOutDateInput.value);
    if (checkOut <= checkIn) {
      return null;
    }
    return { checkIn, checkOut };
  }

  function renderAvailableRooms() {
    const selectedDates = getSelectedDates();
    if (!selectedDates) {
      roomList.innerHTML = `<p>Please choose valid check-in and check-out dates to view availability.</p>`;
      roomSelect.innerHTML = `<option value="" disabled selected>Select dates first</option>`;
      selectedPrice.textContent = formatRupees(0);
      selectedTax.textContent = formatRupees(0);
      selectedTotal.textContent = formatRupees(0);
      return;
    }

    const rooms = getStorage(STORAGE_KEYS.rooms);
    const availableRooms = rooms.filter((room) => isRoomAvailable(room.id, selectedDates.checkIn, selectedDates.checkOut));

    if (!availableRooms.length) {
      roomList.innerHTML = `<p>No rooms are available for the selected dates. Please choose another date range.</p>`;
      roomSelect.innerHTML = `<option value="" disabled selected>No rooms available</option>`;
      return;
    }

    roomSelect.innerHTML = `
      <option value="" disabled selected>Select a room</option>
      ${availableRooms.map((room) => `
        <option value="${room.id}">${room.type} - ${formatRupees(room.price)}</option>
      `).join("")}
    `;

    roomList.innerHTML = availableRooms.map((room) => `
      <article class="room-card">
        <div>
          <h3>${room.type}</h3>
          <p>${room.description}</p>
        </div>
        <div>
          <span>${formatRupees(room.price)} / night</span>
          <span class="status">Available</span>
        </div>
      </article>
    `).join("");

    selectedPrice.textContent = formatRupees(0);
    selectedTax.textContent = formatRupees(0);
    selectedTotal.textContent = formatRupees(0);
  }

  function updateSummary() {
    const selectedRoom = findRoomById(roomSelect.value);
    const selectedDates = getSelectedDates();
    if (!selectedRoom || !selectedDates) {
      selectedPrice.textContent = formatRupees(0);
      selectedTax.textContent = formatRupees(0);
      selectedTotal.textContent = formatRupees(0);
      return;
    }
    const nights = Math.ceil((selectedDates.checkOut - selectedDates.checkIn) / (1000 * 60 * 60 * 24));
    const base = selectedRoom.price * nights;
    const tax = Math.round(base * 0.12);
    const total = base + tax;
    selectedPrice.textContent = formatRupees(base);
    selectedTax.textContent = formatRupees(tax);
    selectedTotal.textContent = formatRupees(total);
  }

  checkInDateInput.addEventListener("change", () => {
    updateCheckoutMin();
    renderAvailableRooms();
  });
  checkOutDateInput.addEventListener("change", renderAvailableRooms);
  roomSelect.addEventListener("change", updateSummary);

  renderAvailableRooms();

  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    bookingMessage.textContent = "";

    const formData = new FormData(bookingForm);
    const guestName = formData.get("guestName").trim();
    const guestEmail = formData.get("guestEmail").trim();
    const roomId = Number(formData.get("roomSelect"));
    const checkInDate = formData.get("checkInDate");
    const checkOutDate = formData.get("checkOutDate");

    const selectedDates = getSelectedDates();
    if (!guestName || !guestEmail || !roomId || !selectedDates) {
      bookingMessage.textContent = "Please complete all fields and choose a valid date range.";
      return;
    }

    const selectedRoom = findRoomById(roomId);
    if (!selectedRoom || !isRoomAvailable(roomId, selectedDates.checkIn, selectedDates.checkOut)) {
      bookingMessage.textContent = "The selected room is not available for those dates. Please choose another room or date range.";
      return;
    }

    const nights = Math.ceil((selectedDates.checkOut - selectedDates.checkIn) / (1000 * 60 * 60 * 24));
    const basePrice = selectedRoom.price * nights;
    const taxCharge = Math.round(basePrice * 0.12);
    const totalCost = basePrice + taxCharge;
    const bookings = getStorage(STORAGE_KEYS.bookings);

    bookings.push({
      id: Date.now(),
      guestName,
      guestEmail,
      roomId,
      roomType: selectedRoom.type,
      checkInDate,
      checkOutDate,
      nights,
      basePrice,
      taxCharge,
      totalCost,
      status: "Requested",
      submittedAt: new Date().toISOString()
    });

    setStorage(STORAGE_KEYS.bookings, bookings);
    bookingMessage.textContent = `Room request submitted for ${guestName}. Admin will review it. Estimated total: ${formatRupees(totalCost)}.`;
    bookingForm.reset();
    renderAvailableRooms();
  });
}

function renderDashboardPage() {
  const guestSearchForm = document.getElementById("guestSearchForm");
  const guestBookings = document.getElementById("guestBookings");
  const guestFoodOrders = document.getElementById("guestFoodOrders");
  const dashboardMessage = document.getElementById("dashboardMessage");

  function renderBookings(email) {
    const bookings = getStorage(STORAGE_KEYS.bookings).filter((booking) => booking.guestEmail.toLowerCase() === email.toLowerCase());
    if (!bookings.length) {
      guestBookings.innerHTML = `<p>No room requests found for ${email}.</p>`;
    } else {
      guestBookings.innerHTML = bookings.map((booking) => `
        <article class="booking-card">
          <div>
            <h3>${booking.roomType}</h3>
            <span>${booking.checkInDate} → ${booking.checkOutDate}</span>
          </div>
          <div>
            <span>${booking.status}</span>
            <span>${formatRupees(booking.totalCost)}</span>
          </div>
          <div>
            <p>Guest: ${booking.guestName}</p>
            <p>Stay: ${booking.nights} night(s)</p>
            <p>Taxes included: ${formatRupees(booking.taxCharge)}</p>
          </div>
        </article>
      `).join("");
    }
  }

  function renderFoodOrders(email) {
    const orders = getStorage(STORAGE_KEYS.foodOrders).filter((order) => order.guestEmail.toLowerCase() === email.toLowerCase());
    if (!orders.length) {
      guestFoodOrders.innerHTML = `<p>No food requests found for ${email}.</p>`;
      return;
    }

    guestFoodOrders.innerHTML = orders.map((order) => `
      <article class="booking-card">
        <div>
          <h3>${order.foodName}</h3>
          <span>${order.cuisine}</span>
        </div>
        <div>
          <span>${order.status}</span>
          <span>${formatRupees(order.totalCost)}</span>
        </div>
        <div>
          <p>Guest: ${order.guestName}</p>
          <p>Quantity: ${order.quantity}</p>
          <p>Submitted: ${new Date(order.submittedAt).toLocaleDateString()}</p>
        </div>
      </article>
    `).join("");
  }

  guestSearchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    dashboardMessage.textContent = "";
    const email = document.getElementById("guestSearchEmail").value.trim();
    if (!email) {
      dashboardMessage.textContent = "Please enter your email address.";
      return;
    }
    renderBookings(email);
    renderFoodOrders(email);
  });
}

function renderAdminPage() {
  const loginSection = document.getElementById("adminLoginSection");
  const panelSection = document.getElementById("adminPanelSection");
  const loginForm = document.getElementById("adminLoginForm");
  const loginMessage = document.getElementById("adminLoginMessage");
  const roomForm = document.getElementById("roomForm");
  const foodForm = document.getElementById("foodForm");
  const roomAdminList = document.getElementById("roomAdminList");
  const foodAdminList = document.getElementById("foodAdminList");
  const roomRequestList = document.getElementById("roomRequestList");
  const foodRequestList = document.getElementById("foodRequestList");

  function showAdmin() {
    loginSection.classList.add("hidden");
    panelSection.classList.remove("hidden");
    renderRoomAdminList();
    renderFoodAdminList();
    renderRoomRequestList();
    renderFoodRequestList();
  }

  function displayMessage(target, message) {
    target.textContent = message;
    setTimeout(() => { target.textContent = ""; }, 3000);
  }

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const password = document.getElementById("adminPassword").value;
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("adminLoggedIn", "true");
      showAdmin();
    } else {
      loginMessage.textContent = "Incorrect password. Please try again.";
    }
  });

  function renderRoomAdminList() {
    const rooms = getStorage(STORAGE_KEYS.rooms);
    if (!rooms.length) {
      roomAdminList.innerHTML = `<p>No rooms configured yet.</p>`;
      return;
    }
    roomAdminList.innerHTML = rooms.map((room) => `
      <div class="admin-card">
        <div>
          <strong>${room.type}</strong>
          <span>Room details</span>
        </div>
        <p>${room.description}</p>
        <p>Price: ${formatRupees(room.price)}</p>
        <div>
          <button class="button button-secondary" data-room-edit="${room.id}">Edit</button>
          <button class="button button-secondary" data-room-delete="${room.id}">Delete</button>
        </div>
      </div>
    `).join("");

    roomAdminList.querySelectorAll("button").forEach((button) => {
      if (button.dataset.roomEdit) {
        button.addEventListener("click", () => editRoom(Number(button.dataset.roomEdit)));
      }
      if (button.dataset.roomDelete) {
        button.addEventListener("click", () => deleteRoom(Number(button.dataset.roomDelete)));
      }
    });
  }

  function renderFoodAdminList() {
    const foodItems = getStorage(STORAGE_KEYS.food);
    if (!foodItems.length) {
      foodAdminList.innerHTML = `<p>No food items configured yet.</p>`;
      return;
    }
    foodAdminList.innerHTML = foodItems.map((item) => `
      <div class="admin-card">
        <div>
          <strong>${item.name}</strong>
          <span>${item.cuisine}</span>
        </div>
        <p>Price: ${formatRupees(item.price)}</p>
        <button class="button button-secondary" data-food-delete="${item.id}">Delete</button>
      </div>
    `).join("");

    foodAdminList.querySelectorAll("button").forEach((button) => {
      if (button.dataset.foodDelete) {
        button.addEventListener("click", () => deleteFood(Number(button.dataset.foodDelete)));
      }
    });
  }

  function renderRoomRequestList() {
    const bookings = getStorage(STORAGE_KEYS.bookings);
    if (!bookings.length) {
      roomRequestList.innerHTML = `<p>No room requests available.</p>`;
      return;
    }

    roomRequestList.innerHTML = bookings.map((booking) => `
      <div class="admin-card">
        <div>
          <strong>${booking.roomType}</strong>
          <span>${booking.status}</span>
        </div>
        <p>${booking.guestName} • ${booking.guestEmail}</p>
        <p>${booking.checkInDate} to ${booking.checkOutDate} • ${booking.nights} night(s)</p>
        <p>Total: ${formatRupees(booking.totalCost)}</p>
        <div>
          ${booking.status === "Requested" ? `<button class="button button-secondary" data-room-approve="${booking.id}">Approve</button><button class="button button-secondary" data-room-reject="${booking.id}">Reject</button>` : ""}
        </div>
      </div>
    `).join("");

    roomRequestList.querySelectorAll("button").forEach((button) => {
      if (button.dataset.roomApprove) {
        button.addEventListener("click", () => approveRoomRequest(Number(button.dataset.roomApprove)));
      }
      if (button.dataset.roomReject) {
        button.addEventListener("click", () => rejectRoomRequest(Number(button.dataset.roomReject)));
      }
    });
  }

  function renderFoodRequestList() {
    const orders = getStorage(STORAGE_KEYS.foodOrders);
    if (!orders.length) {
      foodRequestList.innerHTML = `<p>No food requests available.</p>`;
      return;
    }

    foodRequestList.innerHTML = orders.map((order) => `
      <div class="admin-card">
        <div>
          <strong>${order.foodName}</strong>
          <span>${order.status}</span>
        </div>
        <p>${order.guestName} • ${order.guestEmail}</p>
        <p>Quantity: ${order.quantity}</p>
        <p>Total: ${formatRupees(order.totalCost)}</p>
        <div>
          ${order.status === "Requested" ? `<button class="button button-secondary" data-food-approve="${order.id}">Approve</button><button class="button button-secondary" data-food-reject="${order.id}">Reject</button>` : ""}
        </div>
      </div>
    `).join("");

    foodRequestList.querySelectorAll("button").forEach((button) => {
      if (button.dataset.foodApprove) {
        button.addEventListener("click", () => approveFoodRequest(Number(button.dataset.foodApprove)));
      }
      if (button.dataset.foodReject) {
        button.addEventListener("click", () => rejectFoodRequest(Number(button.dataset.foodReject)));
      }
    });
  }

  function approveRoomRequest(id) {
    const bookings = getStorage(STORAGE_KEYS.bookings);
    const booking = bookings.find((item) => item.id === id);
    if (!booking) return;
    booking.status = "Approved";
    setStorage(STORAGE_KEYS.bookings, bookings);
    renderRoomRequestList();
  }

  function rejectRoomRequest(id) {
    const bookings = getStorage(STORAGE_KEYS.bookings);
    const booking = bookings.find((item) => item.id === id);
    if (!booking) return;
    booking.status = "Rejected";
    setStorage(STORAGE_KEYS.bookings, bookings);
    renderRoomRequestList();
  }

  function approveFoodRequest(id) {
    const orders = getStorage(STORAGE_KEYS.foodOrders);
    const order = orders.find((item) => item.id === id);
    if (!order) return;
    order.status = "Approved";
    setStorage(STORAGE_KEYS.foodOrders, orders);
    renderFoodRequestList();
  }

  function rejectFoodRequest(id) {
    const orders = getStorage(STORAGE_KEYS.foodOrders);
    const order = orders.find((item) => item.id === id);
    if (!order) return;
    order.status = "Rejected";
    setStorage(STORAGE_KEYS.foodOrders, orders);
    renderFoodRequestList();
  }

  function editRoom(id) {
    const rooms = getStorage(STORAGE_KEYS.rooms);
    const room = rooms.find((item) => item.id === id);
    if (!room) return;
    const type = prompt("Room type:", room.type) || room.type;
    const description = prompt("Description:", room.description) || room.description;
    const price = Number(prompt("Price in ₹:", room.price) || room.price);
    const updatedRooms = rooms.map((item) => item.id === id ? { ...item, type, description, price } : item);
    setStorage(STORAGE_KEYS.rooms, updatedRooms);
    renderRoomAdminList();
    displayMessage(document.getElementById("roomAdminMessage"), "Room details updated.");
  }

  function deleteRoom(id) {
    if (!confirm("Delete this room permanently?")) return;
    const rooms = getStorage(STORAGE_KEYS.rooms).filter((room) => room.id !== id);
    setStorage(STORAGE_KEYS.rooms, rooms);
    renderRoomAdminList();
    displayMessage(document.getElementById("roomAdminMessage"), "Room deleted successfully.");
  }

  function deleteFood(id) {
    if (!confirm("Delete this food item permanently?")) return;
    const foodItems = getStorage(STORAGE_KEYS.food).filter((item) => item.id !== id);
    setStorage(STORAGE_KEYS.food, foodItems);
    renderFoodAdminList();
    displayMessage(document.getElementById("foodAdminMessage"), "Food item removed.");
  }

  roomForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const type = document.getElementById("roomType").value.trim();
    const description = document.getElementById("roomDescription").value.trim();
    const price = Number(document.getElementById("roomPrice").value);
    if (!type || !description || !price) {
      displayMessage(document.getElementById("roomAdminMessage"), "Please fill all room fields.");
      return;
    }
    const rooms = getStorage(STORAGE_KEYS.rooms);
    rooms.push({ id: Date.now(), type, description, price, available: true });
    setStorage(STORAGE_KEYS.rooms, rooms);
    renderRoomAdminList();
    roomForm.reset();
    displayMessage(document.getElementById("roomAdminMessage"), "Room added successfully.");
  });

  foodForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("foodName").value.trim();
    const cuisine = document.getElementById("foodCuisine").value;
    const price = Number(document.getElementById("foodPrice").value);
    if (!name || !price) {
      displayMessage(document.getElementById("foodAdminMessage"), "Please fill all food item fields.");
      return;
    }
    const foodItems = getStorage(STORAGE_KEYS.food);
    foodItems.push({ id: Date.now(), name, cuisine, price });
    setStorage(STORAGE_KEYS.food, foodItems);
    renderFoodAdminList();
    foodForm.reset();
    displayMessage(document.getElementById("foodAdminMessage"), "Food item added successfully.");
  });

  const adminLoggedIn = localStorage.getItem("adminLoggedIn") === "true";
  if (adminLoggedIn) {
    showAdmin();
  }
}

function renderContactPage() {
  const contactForm = document.getElementById("contactForm");
  const confirmation = document.getElementById("contactConfirmation");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const message = document.getElementById("contactMessage").value.trim();
    if (!name || !email || !message) {
      confirmation.textContent = "Please complete all contact fields.";
      return;
    }
    const messages = getStorage(STORAGE_KEYS.messages);
    messages.push({ id: Date.now(), name, email, message, submittedAt: new Date().toISOString() });
    setStorage(STORAGE_KEYS.messages, messages);
    confirmation.textContent = "Thank you! Your message has been saved.";
    contactForm.reset();
  });
}

function handlePage() {
  initializeData();
  const page = document.body.dataset.page;
  if (page === "menu") {
    renderMenuPage();
  } else if (page === "booking") {
    renderBookingPage();
  } else if (page === "dashboard") {
    renderDashboardPage();
  } else if (page === "admin") {
    renderAdminPage();
  } else if (page === "contact") {
    renderContactPage();
  }
}

window.addEventListener("DOMContentLoaded", handlePage);
