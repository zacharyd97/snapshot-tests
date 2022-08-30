import  Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function GitHubCard() {
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/100/180" />
      <Card.Body>
        <Card.Title>ZacharyD97</Card.Title>
        <Card.Text>
          My name is zach i am a full stack software engineer with skill in reactjs, javaScript and bootstrap
        </Card.Text>
      </Card.Body>
    </Card>
    )
}

export default GitHubCard