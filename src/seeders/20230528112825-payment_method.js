'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('PaymentMethods', [
            {
                payment_types_id: 1,
                logo: '',
                payment_method_name: "BCA",
                payment_admin_nominal: 4000,
                platform_payment_method: "mobile",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                payment_types_id: 1,
                logo: '',
                payment_method_name: "BRI",
                payment_admin_nominal: 4000,
                platform_payment_method: "mobile",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                payment_types_id: 1,
                logo: '',
                payment_method_name: "Mandiri",
                payment_admin_nominal: 4000,
                platform_payment_method: "mobile",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                payment_types_id: 1,
                logo: '',
                payment_method_name: "BNI",
                payment_admin_nominal: 4000,
                platform_payment_method: "mobile",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                payment_types_id: 2,
                logo: '',
                payment_method_name: "GoPay",
                payment_admin_percent: 2,
                platform_payment_method: "mobile",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                payment_types_id: 2,
                logo: '',
                payment_method_name: "QRIS",
                payment_admin_percent: 0.7,
                platform_payment_method: "mobile",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                payment_types_id: 3,
                logo: '',
                payment_method_name: "Alfamart",
                payment_admin_percent: 0.7,
                platform_payment_method: "mobile",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                payment_types_id: 4,
                logo: '',
                payment_method_name: "Cash",
                platform_payment_method: "web",
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
