const initialPostProps = {
    mode: 'cors',
    cache: 'default'
} as any;

export default {
    get: (url) => {
        return fetch(url);
    },
    post: (url, body, props = initialPostProps) => {
        return fetch(url, {
            ...props,
            body,
            method: 'POST',
        });
    }
};