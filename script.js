// Property data with additional features
const properties = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        title: 'Modern Downtown Apartment',
        description: 'Spacious 2-bedroom apartment in the heart of downtown with stunning city views and modern amenities.',
        price: '$2,500/month',
        features: ['2 Bed', '2 Bath', 'City View', 'Parking'],
        broker: {
            name: 'Sarah Johnson',
            title: 'Senior Agent',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
            phone: '+1 (555) 123-4567'
        }
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        title: 'Luxury Villa with Pool',
        description: 'Beautiful 4-bedroom villa with private pool and garden in exclusive gated community.',
        price: '$4,200/month',
        features: ['4 Bed', '3 Bath', 'Pool', 'Garden'],
        broker: {
            name: 'Michael Chen',
            title: 'Luxury Specialist',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
            phone: '+1 (555) 234-5678'
        }
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        title: 'Cozy Studio Loft',
        description: 'Charming studio loft perfect for young professionals, fully furnished with modern amenities.',
        price: '$1,800/month',
        features: ['Studio', '1 Bath', 'Furnished', 'Trendy'],
        broker: {
            name: 'Emily Davis',
            title: 'Urban Specialist',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
            phone: '+1 (555) 345-6789'
        }
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        title: 'Family Suburban Home',
        description: '3-bedroom house with large backyard, perfect for families with children and pets.',
        price: '$3,200/month',
        features: ['3 Bed', '2 Bath', 'Yard', 'Family'],
        broker: {
            name: 'David Wilson',
            title: 'Family Homes Expert',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
            phone: '+1 (555) 456-7890'
        }
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        title: 'Penthouse Suite',
        description: 'Luxury penthouse with panoramic city views and premium amenities in prestigious building.',
        price: '$6,500/month',
        features: ['3 Bed', '3 Bath', 'Penthouse', 'Views'],
        broker: {
            name: 'Lisa Rodriguez',
            title: 'Luxury Consultant',
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
            phone: '+1 (555) 567-8901'
        }
    },
    {
        id: 6,
        image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        title: 'Waterfront Condo',
        description: 'Stunning waterfront condominium with private balcony and marina access.',
        price: '$3,800/month',
        features: ['2 Bed', '2 Bath', 'Waterfront', 'Balcony'],
        broker: {
            name: 'James Miller',
            title: 'Waterfront Specialist',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
            phone: '+1 (555) 678-9012'
        }
    }
];

function renderPropertyCards() {
    const container = document.getElementById('propertyCards');
    container.innerHTML = '';
    
    properties.forEach(property => {
        const propertyCard = `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="property-card" onclick="openPropertyDetail(${property.id})">
                    <div class="property-image" style="background-image: url('${property.image}');">
                        <div class="property-price">${property.price}</div>
                    </div>
                    <div class="property-info">
                        <div class="property-title">${property.title}</div>
                        <div class="property-description">${property.description}</div>
                        <div class="property-features">
                            ${property.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                        </div>
                        <div class="broker-info">
                            <div class="broker-profile">
                                <img src="${property.broker.avatar}" alt="${property.broker.name}" class="broker-avatar">
                                <div>
                                    <div class="broker-name">${property.broker.name}</div>
                                    <div class="broker-title">${property.broker.title}</div>
                                </div>
                            </div>
                            <a href="tel:${property.broker.phone}" class="broker-phone" onclick="event.stopPropagation();">Call</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += propertyCard;
    });
}

function openPropertyDetail(propertyId) {
    // Store property ID in localStorage for detail page
    localStorage.setItem('selectedPropertyId', propertyId);
    // Open detail page
    window.open('detail.html', '_blank');
}

// Initialize property cards
renderPropertyCards();

// Contact form submission handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show success message
    const button = this.querySelector('.btn-contact-submit');
    const originalText = button.innerHTML;
    
    button.innerHTML = '<i class="fas fa-check me-2"></i>Message Sent!';
    button.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        this.reset();
    }, 3000);
});

// Add entrance animations for contact cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.contact-card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(50px)';
                    card.style.transition = 'all 0.6s ease';
                    
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                }, index * 200);
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe contact section
const contactSection = document.querySelector('.contact-section');
if (contactSection) {
    observer.observe(contactSection);
}

// About section animations
const aboutObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const aboutContent = entry.target.querySelector('.about-content');
            const aboutImage = entry.target.querySelector('.about-image');
            
            // Animate content from right
            aboutContent.style.opacity = '0';
            aboutContent.style.transform = 'translateX(50px)';
            aboutContent.style.transition = 'all 0.8s ease';
            
            // Animate image from left
            aboutImage.style.opacity = '0';
            aboutImage.style.transform = 'translateX(-50px)';
            aboutImage.style.transition = 'all 0.8s ease';
            
            setTimeout(() => {
                aboutContent.style.opacity = '1';
                aboutContent.style.transform = 'translateX(0)';
                aboutImage.style.opacity = '1';
                aboutImage.style.transform = 'translateX(0)';
            }, 200);
            
            // Animate stats with counter effect
            setTimeout(() => {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const finalNumber = parseInt(stat.textContent.replace(/[^0-9]/g, ''));
                    const suffix = stat.textContent.replace(/[0-9]/g, '');
                    let currentNumber = 0;
                    const increment = finalNumber / 50;
                    
                    const counter = setInterval(() => {
                        currentNumber += increment;
                        if (currentNumber >= finalNumber) {
                            stat.textContent = finalNumber + suffix;
                            clearInterval(counter);
                        } else {
                            stat.textContent = Math.floor(currentNumber) + suffix;
                        }
                    }, 30);
                });
            }, 600);
            
            aboutObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe about section
const aboutSection = document.querySelector('.about-section');
if (aboutSection) {
    aboutObserver.observe(aboutSection);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
