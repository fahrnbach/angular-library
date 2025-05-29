const express = require('express');
const { Sequelize, DataTypes, where } = require('sequelize');
const cors = require('cors');

const app = express();
const port = 3000;

// Enable CORS for frontend communication
app.use(cors());
app.use(express.json());

// PostgreSQL connection using Sequelize
const sequelize = new Sequelize('mydatabase', 'calypso', 'pass', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
});

// Test the database connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// Define model
// const Components = sequelize.define('Components', {
//     id: {
//       type: Sequelize.STRING,
//       allowNull: false,
//       primaryKey: true
//     },
//     name: {
//       type: Sequelize.STRING,
//       allowNull: false,
//     }
//   }, {
//     tableName: 'components',  // Specify the correct table name here (lowercase)
//     timestamps: true, 
//   });

const Component = sequelize.define('Component', {
    id: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    photo_uri: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    info: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    version: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    price: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    stock:{
        type: Sequelize.STRING,
        allowNull: true,
    }

  }, {
    tableName: 'components',
    timestamps: true, 
  });


// Route to get users
app.delete('/components', async (req, res) => {
    try {
        const { id } = req.query
        let deleterId = id

        if (deleterId) {
            const component = await Component.findByPk(deleterId);
            // const component = await Component.findOne({
            //     where: {
            //         id: id
            //     }
            // });
        if (component) {
                // console.log('found!')
                await component.destroy();
                console.log(`Destroyed Component with ID ${deleterId}`)
                return res.status(200).json({ Success: 'Component destroyed' });
                // return res.json(component)
            } else {
                console.log(`Could not find Component with ID ${id} to Destroyzc`)
                return res.status(404).json({ error: 'User not found' });
            }
        } else if (!id) {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
})

app.post('/components', async (req, res) => {
    try {
        const {
            name,
            photo_uri,
            description,
            info,
            version,
            price,
            stock
        } = req.body.params
        console.log(`${name} ${photo_uri} ${description}`)
        console.log(req.body.params)
// !ADD SANITIZER HERE
        if (name && photo_uri && description && info && version && price && stock) {
                // console.log('found!')
                await Component.create({
                    name: name,
                    photo_uri: photo_uri,
                    description: description,
                    info: info,
                    version: version,
                    price: price,
                    stock: stock
                });
                console.log(`Created Component!`)
                return res.status(200).json({ Success: 'Component Created!' });
                // return res.json(component)
            } else {
                console.log(`Could not create Component. Insufficient Info`);
                res.status(404).json({ error: 'Could not create component. Insufficient information' });
            }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

app.get('/components', async (req, res) => {
    try {
        const { id } = req.query;
        // console.log(id)
        // console.log(req.query)
        // const query = 'SELECT * FROM users WHERE ';
        // let conditions = [];
        let searchId = id
        // let values = [];
        if (id) {
            // console.log("Selecting one")
            // const component = await sequelize.query(`SELECT * FROM components WHERE id = ${id};`);
            const component = await Component.findOne({
                where: {
                    id: id
                }
            });
            if (component) {
                // console.log('found!')
                return res.json(component)
            } else {
                return res.status(404).json({ error: 'User not found' });
            }
        } else if (!id) {
            console.log('could not locate id ')
            const components = await Component.findAll();
            res.json(components);
        }
        // query += conditions.join(' AND ');
    } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Server error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});