## Project Name & Pitch

# poochncape eCommerce Store 

A full stack eCommerce application built with two applications - an Admin site and a Storefront site. Built with NextJS and MongoDB. 

Admin site with features for admin login with various admin roles, dashboard to view business operations on orders and revenue, products page to upload new, edit and delete products, categories page to create new, edit and delete categories, orders page to view customers' orders, admins page to manage admins and admin roles, settings page to edit featured products and shipping fees.

Store site to view featured product, latest listings, all products and categories. With features to add products to cart, add products to wishlist, add product reviews, search products and payment link via Stripe API. 

https://poochncape-admin.vercel.app/
https://poochncape.vercel.app/

## Technologies Used

- MongoDB
- NextJS
- ReactJS
- Node.js

- Styling
    - Tailwind CSS (Admin)
    - Styled Components (Store)
    - React SweetAlert2
    - BounceLoader

## Approach to Project

To create an e-commerce app with two separate apps, I adopted a strategic approach that involved developing an admin site and a store site, each with distinct functionalities tailored to their respective roles.

For the admin site, I chose to utilize Next.js, a popular React framework known for its server-side rendering capabilities. This decision allowed me to build a robust and efficient web application. To enhance the user interface and streamline development, I employed Tailwind CSS, a utility-first CSS framework that offers a wide range of pre-built components. This choice allowed me to quickly style and customize the admin site while maintaining consistency across the interface.

To handle data storage and retrieval, I integrated MongoDB, a NoSQL database known for its scalability and flexibility. This database choice allowed me to efficiently manage the admin-related data, including login credentials, order details, revenue statistics, product information, categories, and admin roles. By leveraging MongoDB's document-oriented structure, I could easily organize and manipulate data for the admin site's various features.

The admin site's functionality encompassed a comprehensive range of features. I implemented a secure admin login system with different admin roles to ensure appropriate permissions for various tasks. The dashboard provided an overview of essential business operations, displaying order information and revenue statistics. The products page allowed me to upload, edit, and delete products, facilitating efficient inventory management. Similarly, the categories page enabled me to create, modify, and delete product categories, ensuring proper organization. The orders page allowed me to view customers' orders, streamlining order processing. The admins page facilitated the management of admins and their roles, allowing for smooth administration. Lastly, the settings page allowed me to edit featured products and adjust shipping fees, giving me control over crucial aspects of the store.

For the store site, I again utilized Next.js due to its excellent server-side rendering capabilities. However, this time, I chose to utilize styled components, a CSS-in-JS library that offers a convenient way to style React components. By using styled components, I could encapsulate styling within individual components, promoting reusability and maintainability.

Just like the admin site, the store site employed MongoDB as the database to ensure consistency across both applications. This allowed for seamless synchronization of data between the two apps. Additionally, I integrated the Stripe API, a popular payment gateway, to enable secure online transactions. By incorporating Stripe, I provided customers with a reliable and convenient payment method.

The store site boasted an array of features designed to enhance the shopping experience. Users could view featured products and explore the latest listings, keeping them up to date with the store's offerings. The all products and categories sections provided comprehensive catalogs for easy navigation. The ability to add products to the cart and wishlist allowed customers to save and manage their desired items conveniently. User-generated product reviews fostered a sense of trust and helped potential buyers make informed decisions. The search functionality enabled users to find specific products quickly. Finally, the integration of the Stripe API facilitated secure payment processing, ensuring a seamless checkout experience for customers.

Overall, my approach to creating the e-commerce app was well-rounded and comprehensive. By building separate admin and store sites, I could tailor the features and functionalities to the distinct needs of each role. Leveraging Next.js, Tailwind CSS, styled components, and MongoDB, I ensured efficient development, excellent user experience, and robust data management. The integration of the Stripe API added a secure and reliable payment gateway to the store site, completing the end-to-end e-commerce solution.

## Admin Site Screenshots

### Dashboard

### Products Page

### Categories Page

### Orders Page

### Admins Page

### Settings Page

## Store Site Screenshots

### Home Page

### Products Page

### Categories Page

### Account Page

### Cart Page

### Search function

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

In the "admin" and "store" directory, you can run in separate terminals:

### Installation:

`npm install`

### To Start Server:

`npm run dev`

### To Run App:
Open [http://localhost:3000](http://localhost:3000) for admin and [http://localhost:3001](http://localhost:3001) for store to view it in your browser.

## User Stories

Admin:

- Log in securely with unique credentials and manage admin roles.
- View a comprehensive dashboard with order and revenue statistics.
- Manage products by uploading, editing, and deleting them.
- Create, modify, and delete categories for effective organization.
- View and manage customers' orders, including tracking statuses.
- Manage other admins and their roles.
- Access a settings page to edit featured products and adjust shipping fees.

User:

- View featured products on the homepage.
- See the latest listings to stay updated on store offerings.
- Browse all products and categories.
- Add products to the cart for purchase.
- Add products to the wishlist for future consideration.
- Read and add product reviews.
- Search for specific products by name, category, etc.
- Make secure payments using the Stripe API for a seamless checkout experience.

Wireframe for the project can be viewed at https://www.figma.com/file/YGEuIAuHaisCHQcdvXpArr/Project-4

## About Me

I am an aspiring software developer and I aim to continualy hone my programming skills inorder to write programs that bring convenience and joy to the everyday life. My GitHub profile can be accessed via https://github.com/Irvinnlim and my portfolio site can be accessed via https://irvinnlim.com
