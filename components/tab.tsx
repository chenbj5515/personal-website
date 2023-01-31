export default function Tab(props: any) {
    return (
        <div className="flex w-full justify-between text-base">
            {
                Object.keys(props.categories).map(item => (
                    <div>{item}</div>
                ))
            }
        </div>
    )
}