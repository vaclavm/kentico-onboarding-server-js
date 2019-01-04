module.exports = async (context, request) => {
    context.res = {
        status: 200,
        body: 'Published successfully'
    }
};