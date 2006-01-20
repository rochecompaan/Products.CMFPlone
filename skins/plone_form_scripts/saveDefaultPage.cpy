## Script (Python) "selectDefaultPage"
##title=Helper method to select a default page for a folder view
##bind container=container
##bind context=context
##bind namespace=
##bind script=script
##bind state=state
##bind subpath=traverse_subpath
##parameters=objectId=None

INTERFACE = 'Products.CMFPlone.interfaces.BrowserDefault.ISelectableBrowserDefault'

if not objectId:
    message = context.translate("Please select an item to use.")
    return state.set(status='missing', portal_status_message=message)    

from Products.CMFCore.utils import getToolByName
itool = getToolByName(context, 'portal_interface')

# Should never happen, but let's be sure
if not itool.objectImplements(context, INTERFACE):
    raise NotImplementedError, "Object does not support setting default page"

# Also should never happen
if not objectId in context.objectIds():
    message = context.translate("There is no object with short name "
                                        "${name} in this folder.",
                                {'name': objectId})
    return state.set(status='failure', portal_status_message=message)

context.setDefaultPage(objectId)

message = context.translate("View changed.")
return state.set(portal_status_message=message)