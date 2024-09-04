function showTab(tabName) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.style.display = 'none');
    
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
  
    document.getElementById(tabName).style.display = 'block';
    event.target.classList.add('active');
  }
  
  function addImage() {
    const gallery = document.getElementById('gallery');
    const newImage = document.createElement('img');
    newImage.src = `https://via.placeholder.com/100`;
    gallery.appendChild(newImage);
  }
  
  // Initialize first tab content to be visible
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('about').style.display = 'block';
  });
  