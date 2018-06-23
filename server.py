import asyncio
import websockets
import json
import mysql.connector as connect

async def ok(ws,path):
    cnx = connect.connect(user='user1', database='dbsys1', host='localhost', password='const1')
    cursor = cnx.cursor()
    query = ('select name from products')
    try:
      while (1):
        v1 = await ws.recv()
        v2 = json.loads(v1)
        cursor.execute(query)
        for v in cursor:
          print (v[0])
          v2 = json.dumps({'name':v[0]})
          await ws.send(v2)
    except websockets.exceptions.ConnectionClosed:
      cnx.close()
      cursor.close()
      pass

server = websockets.serve(ok,'',9191)

try:
    asyncio.get_event_loop().run_until_complete(server)
    asyncio.get_event_loop().run_forever()
except KeyboardInterrupt:
   pass
