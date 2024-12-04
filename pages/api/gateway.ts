export const config = {
    runtime: 'edge'
}

export default async function (req: Request) {
    const { createGatewayOnEdgeRuntime } = await import('@lobehub/chat-plugins-gateway')
    return createGatewayOnEdgeRuntime()(req)
}
