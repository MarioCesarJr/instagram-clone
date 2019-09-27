# instagram-clone

omnistack 07

## Frontend

![frontend-screenshot01](screenshots/frontend-screenshot01.png)

![frontend-screenshot02](screenshots/frontend-screenshot02.png)

## Mobile

![mobile](screenshots/mobile.png)

## Steps to Setup

1. Clone this repository

```bash
git clone https://github.com/MarioCesarJr/instagram-clone.git
```

2. Connect application with MongoDB Atlas

```bash
cd backend
```

Open `src/index.js` file and edit:

```
mongoose.connect('mongodb+srv://<username>:<password>@cluster0-xyulq.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser : true 
});
```

3. Install dependencies

```bash
> yarn
```

4. Run api

```bash
> yarn dev
```

## Frontend

1. Install dependencies

```bash
> cd frontend
```

```bash
> yarn
```

2. Run App

```bash
> yarn start
```

Open <http://localhost:3000> to view it in the browser.

## Mobile

1. Install dependencies

```bash
> cd mobile
```

```bash
> yarn
```

2. Run app

```bash
  # android
> react-native run-android

  # ios:
> react-native run-ios
```
