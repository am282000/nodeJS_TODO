# NODEJS TODO Backend

It consist of various CRUD operaions.

1. Users

- Access all the usr API by prefixing this **/api/v1/users**

<table>
  <thead>
    <tr>
      <th>API TYPE</th>
      <th>ENDPOINT</th>
      <th>DESCRIPTION</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>POST</td>
      <td>/new</td>
      <td>Create a new task</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/my-task</td>
      <td>Get users all tasks</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>/:taskid</td>
      <td>Edit particular task</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>/:taskid</td>
      <td>Delete user particular task</td>
    </tr>
  </tbody>
</table>

2. Tasks

- Access all the usr API by prefixing this **/api/v1/task**

<table>
  <thead>
    <tr>
      <th>API TYPE</th>
      <th>ENDPOINT</th>
      <th>DESCRIPTION</th>
      <th>Payload/Params</th>
      <th>Response</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>POST</td>
      <td>/new</td>
      <td>Create a new task</td>
      <td>
      `{ 
      title: string,
      description: string
     }`
	</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/my-task</td>
      <td>Get users all tasks</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>/:taskid</td>
      <td>Edit particular task</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>/:taskid</td>
      <td>Delete user particular task</td>
    </tr>

  </tbody>
</table>

### Deploying it live on [render.com](https://render.com/)

API is hosted on [link](https://todo-app-rpcb.onrender.com/)
