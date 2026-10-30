// @ts-check
import { defineConfig, envField } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    env: {
        schema: {
            MONGODB_URI: envField.string({
                context: 'server',
                access: 'secret',
                optional: false,
            }),
        },
    },
});
