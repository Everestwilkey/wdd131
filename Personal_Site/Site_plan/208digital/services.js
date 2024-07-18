export const services = [
    
        {
            id: 1,
            title: 'Web Design',
            description: 'Creating stunning and responsive websites.',
            imgSrc: 'assets/design_resized.webp'
        },
        {
            id: 2,
            title: 'Web Development',
            description: 'Developing robust web applications.',
            imgSrc: 'assets/web_resized.webp'
        },
        {
            id: 3,
            title: 'SEO',
            description: 'Optimizing your website for search engines.',
            imgSrc: 'assets/seo_resized.webp'
        },
        // {
        //     id: 4,
        //     title: 'Graphic Design',
        //     description: 'Crafting visual content to communicate messages.',
        //     imgSrc: 'assets/graphic_design_resized.webp'
        // },
        // {
        //     id: 5,
        //     title: 'Content Writing',
        //     description: 'Creating engaging content for your website.',
        //     imgSrc: 'assets/content_writing_resized.webp'
        // },
        // {
        //     id: 6,
        //     title: 'Social Media Marketing',
        //     description: 'Promoting your brand on social media platforms.',
        //     imgSrc: 'assets/social_media_marketing_resized.webp'
        // },
        // {
        //     id: 7,
        //     title: 'E-commerce Solutions',
        //     description: 'Building and managing online stores.',
        //     imgSrc: 'assets/ecommerce_resized.webp'
        // },
        // {
        //     id: 8,
        //     title: 'Brand Strategy',
        //     description: 'Developing a comprehensive brand strategy.',
        //     imgSrc: 'assets/brand_strategy_resized.webp'
        // },
        // {
        //     id: 9,
        //     title: 'UX/UI Design',
        //     description: 'Designing user interfaces with the best user experience.',
        //     imgSrc: 'assets/ux_ui_design_resized.webp'
        // },
        // {
        //     id: 10,
        //     title: 'Video Production',
        //     description: 'Creating engaging videos to promote your business.',
        //     imgSrc: 'assets/video_production_resized.webp'
        // },
        // {
        //     id: 11,
        //     title: 'Email Marketing',
        //     description: 'Creating and managing email marketing campaigns.',
        //     imgSrc: 'assets/email_marketing_resized.webp'
        // },
        // {
        //     id: 12,
        //     title: 'IT Support',
        //     description: 'Providing IT support and maintenance services.',
        //     imgSrc: 'assets/it_support_resized.webp'
        // }
    ];
    


export function filterServices(keyword) {
    return services.filter(service => service.title.toLowerCase().includes(keyword.toLowerCase()) || service.description.toLowerCase().includes(keyword.toLowerCase()));
}
