    export const button = [
        'System instructions',
        'Get SDK code to chat with Gemini',
        'You need to create and run a prompt in order to share it',
        'No changes to save',
        'Compare mode',
        'Clear chat',
        'View more actions'
    ]


    export const cardData = [
        {
            title: 'Native speech generation',
            decs: 'Generate high quality text to speech with Gemini',
            img: 'https://www.gstatic.com/aistudio/zero-state/text_soundswave.png'
        },
        {
            title: 'Native speech generation',
            decs: 'Generate high quality text to speech with Gemini',
            img: 'https://www.gstatic.com/aistudio/zero-state/text_soundswave.png'
        },
        {
            title: 'Native speech generation',
            decs: 'Generate high quality text to speech with Gemini',
            img: 'https://www.gstatic.com/aistudio/zero-state/text_soundswave.png'
        },
        {
            title: 'Native speech generation',
            decs: 'Generate high quality text to speech with Gemini',
            img: 'https://www.gstatic.com/aistudio/zero-state/text_soundswave.png'
        },
    ]

    export const items = [
        {
            type: 'single',
            data: [{
                actions: [{ type: 'select' }],
            }, {
                sideLabel: 'Token count',
                actions: [{ type: 'text' }],
            }, {
                topLabel: 'Temperature',
                actions: [
                    { type: 'range' }
                ],
            }]
        },
        {
            title: 'Thinking',
            type: 'single',
            data: [{
                sideLabel: 'Thinking mode',
                actions: [{ type: 'toggle' }],
            }, {
                sideLabel: 'Set thinking budget',
                actions: [{ type: 'toggle' }],
            }]
        },
        {
            title: 'Tools',
            type: 'wrap',
            data: [{
                sideLabel: 'Structured output',
                actions: [{ type: 'button' }, { type: 'toggle' }],
            }, {
                sideLabel: 'Code execution',
                actions: [{ type: 'toggle' }],
            }, {
                sideLabel: 'Function calling',
                actions: [{ type: 'button' }, { type: 'toggle' }],
            }, {
                sideLabel: 'Grounding with Google Search',
                actions: [{ type: 'toggle' }],
            }, {
                sideLabel: 'URL context',
                actions: [{ type: 'toggle' }],
            }]
        },
        {
            title: 'Advanced settings',
            type: 'wrap',
            data: [{
                sideLabel: 'Safety settings',
                actions: [{ type: 'button' }],
            }, {
                sideLabel: 'Add Stop Sequences',
                actions: [{ type: 'toggle' }],
            }, {
                topLabel: 'Add step sequences',
                actions: [{ type: 'input' }],
            }, {
                sideLabel: 'output length',
                actions: [{ type: 'number' }],
            }, {
                topLabel: 'Top P',
                actions: [{ type: 'range' }],
            }]
        },

    ];

    export const promptsGalleryData = [
        'Test if AI knows which number is bigger.',
        'Test if AI knows which number is bigger.',
        'Test if AI knows which number is bigger.',
        'Test if AI knows which number is bigger.',
        'Test if AI knows which number is bigger.',

    ]