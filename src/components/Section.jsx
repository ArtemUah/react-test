export const Section = (title, children) => {
    return (<Section>
        {title && <h4>{ title }</h4>}
        {children}
    </Section>)
}