## Script (Python) "validate_reconfig"
##bind container=container
##bind context=context
##bind namespace=
##bind script=script
##bind subpath=traverse_subpath
##parameters=
##title=Validates CMF Site reconfig form
##

validator = context.portal_form_validation.createForm()

validator.addField('title', 'String', required=1)
validator.addField('localTimeFormat', 'String', required=1)
validator.addField('localLongTimeFormat', 'String', required=1)
validator.addField('description', 'String', required=0)
validator.addField('email_from_name', 'String', required=0)
validator.addField('email_from_address', 'Email', required=0)
validator.addField('smtp_server', 'String', required=0)

return validator.validate(context.REQUEST)
