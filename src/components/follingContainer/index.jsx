import { Section, Title, ListFollingContainer, Folling } from './styles.js'

const FollingContainer = props => {
  return (
    <Section>
      <Title>Following {(props.name)?.split(' ')[0]}</Title>
      <ListFollingContainer>
        {(props?.following).map(folling =>(
          <Folling onClick={() => window.location.href(folling?.following_url)} key={folling?.id} >
            <h2>{folling?.login}</h2>
            <p>{folling?.html_url}</p>
          </Folling>
        ))}   
      </ListFollingContainer>
    </Section>
  )
}

export default FollingContainer;