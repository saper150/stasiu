export function initializeWorld(x,y){
    let gravity = new b2Vec2(x,y)
    window.world = new b2World(gravity)
    world.gravity = gravity
    world.addToGravity = addToGravity
    world.multGravity = multGravity
    world.resetGravity = resetGravity
    world.changeGravity = changeGravity
}

function addToGravity(x,y){
    world.gravity.x += x
    world.gravity.y += y
    world.SetGravity(world.gravity)
}

function multGravity(x,y){
    world.gravity.x *= x
    world.gravity.y *= y
    world.SetGravity(world.gravity)
}

function resetGravity(){
    world.gravity.x = 0
    world.gravity.y = 0
    world.SetGravity(world.gravity)
}

function changeGravity(x,y){
    world.gravity.x = x
    world.gravity.y = y
    world.SetGravity(world.gravity)
}

export function worldBounds(left,top,rigth,bottom){
    const bodyDef = new b2BodyDef()
    const ground = world.CreateBody(bodyDef)
    
    const chainShape = new b2ChainShape();
    chainShape.vertices.push(new b2Vec2(left, bottom))
    chainShape.vertices.push(new b2Vec2(rigth, bottom))
    chainShape.vertices.push(new b2Vec2(rigth, top))
    chainShape.vertices.push(new b2Vec2(left, top))
    
    chainShape.CreateLoop()
    ground.CreateFixtureFromShape(chainShape, 0)
}