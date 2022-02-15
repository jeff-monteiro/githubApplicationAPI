import { Section, Title, ListFollingContainer, Foll } from './styles.js'

const FollingContainer = props => {
  return (
    <Section>
      <Title>Seguindo de {(props.name)?.split(' ')[0]}</Title>
      <ListFollingContainer>
        {(props?.following).map(foll =>(
          <Foll onClick={() => window.location.href(foll?.html_url)} key={foll?.id} >
            <h2>{foll?.login}</h2>
            <p>{foll?.description}</p>
          </Foll>
        ))}   
      </ListFollingContainer>
    </Section>
  )
}

export default FollingContainer;