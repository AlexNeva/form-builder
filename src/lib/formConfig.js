export const formConfig = {
  fields: [
    {
      name: 'active',
      type: 'boolean',
      required: true,
      label: {
        ru: 'Активировать платёжный модуль',
        en: 'Activate payments via ABR Payment',
      },
    },
    {
      name: 'name',
      type: 'string',
      required: true,
      label: {
        ru: 'Название',
        en: 'Name',
      },
      description: {
        ru: 'Название платёжной системы, которое будет отображено клиентам',
        en: 'The name of the payment method displayed to customers',
      },
    },
    {
      name: 'description',
      type: 'string',
      required: false,
      label: {
        ru: 'Описание',
        en: 'Description',
      },
    },
    {
      name: 'test_mode',
      type: 'boolean',
      required: true,
      label: {
        ru: 'Активировать тестовый режим',
        en: 'Activate test mode',
      },
    },
    {
      name: 'merchant_id',
      type: 'string',
      required: true,
      label: {
        ru: 'Merchant ID',
        en: 'Merchant ID',
      },
    },
    {
      name: 'test_payment_gateway_address',
      type: 'string',
      required: true,
      label: {
        ru: 'Адрес тестового платёжного шлюза',
        en: 'Test payment gateway address',
      },
    },
    {
      name: 'payment_gateway_address',
      type: 'string',
      required: true,
      label: {
        ru: 'Адрес платёжного шлюза',
        en: 'Payment gateway address',
      },
    },
    {
      name: 'description_template',
      type: 'string',
      required: false,
      label: {
        ru: 'Шаблон описания заказа',
        en: 'Description template for the created order',
      },
      description: {
        ru: '#ORDER_ID# - order id',
        en: '#ORDER_ID# - order id',
      },
    },
    {
      name: 'path_to_root_certificate',
      type: 'string',
      required: true,
      label: {
        ru: 'Путь к корневому сертификату',
        en: 'Path to root certificate',
      },
      description: {
        ru: 'Польный путь до сертификата с указанием расширения файла',
        en: 'Full path to the root certificate with the name and file extension',
      },
    },
    {
      name: 'path_to_certificate',
      type: 'string',
      required: true,
      label: {
        ru: 'Путь к сертификату',
        en: 'Path to certificate',
      },
      description: {
        ru: 'Полный путь к сертификату с указанием расширения файла',
        en: 'Full path to the certificate with the name and file extension',
      },
    },
    {
      name: 'path_to_private_key',
      type: 'string',
      required: true,
      label: {
        ru: 'Путь к приватному ключу',
        en: 'Path to private key',
      },
      description: {
        ru: 'Полный путь к приватному ключу с указанием расширения файла',
        en: 'Full path to the private key of the certificate with the name and file extension',
      },
    },
    {
      name: 'password_for_private_key',
      type: 'string',
      required: false,
      label: {
        ru: 'Пароль для приватного ключа',
        en: 'Password for private key',
      },
    },
  ],
};
