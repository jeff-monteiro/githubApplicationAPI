import { Section, Title, ListFollerContainer, Repo } from './styles.js'

const FollerContainer = props => {
  return (
    <Section>
      <Title>Seguindo de {(props.name)?.split(' ')[0]}</Title>
      <ListFollerContainer>
        {(props?.followers).map(follers =>(
          <Repo onClick={() => window.location.href(follers?.html_url)} key={follers?.id} >
            <h2>{follers?.name}</h2>
            <p>{follers?.description}</p>
          </Repo>
        ))}   
      </ListFollerContainer>
    </Section>
  )
}

export default FollerContainer;