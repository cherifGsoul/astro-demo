export async function GET({params, request}) {
    return new Response(
      JSON.stringify({
        name: 'Kamel',
        position: 'Product Manager'
      })
    )
}