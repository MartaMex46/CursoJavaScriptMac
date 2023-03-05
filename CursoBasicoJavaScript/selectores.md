SELECTORES CSS

Selector simple. Formado por una cadena textual, sin combinadores.

Selector        Uso
    *           Selector universal
    p           Selector por tipo de elemento del DOM(Document Object Model)
    #           Selector de ID 
    .           Selector de clase
    [att]      Selector de atributo
    :           Selector de pseudoclase
    ::          Selector de pseudoelemento

Selector compuesto. Cadena de selectores simples sin combinadores. 
(Ejemplo: una_clase.otra_clase)
Incluidos los que tienen un selector de pseudoclase (Ejemplo: a:hover)

Lista de selectores. La conforman dos o más selectores de cualquier tipo separados por coma.

Selector complejo. Secuencia o cadena de selectores separados por combinadores.

Combinadores:
1.- El espacio en blanco o >> (nuevo).      Descendiente. 
2.- El signo + (operador suma).             Hermano posterior adyacente.
3.- El signo ~ (virgulilla).                Hermano posterior.                 
4.- El signo > (mayor que)                  Hijo directo.
5.- Otros

Selector
complejo    Uso
a b {}      Apunta a elementos b contenidos en a, sin importar la profundidad
a >> b {}   o descendientes interpuestos (>> nuevo).
a + b {}    Selecciona cada elemento 'b' que sea hermano de un 'a' y además estén 
            adyacentes; 'b' tiene que aparecer en el DOM inmediatamente después de cerrar 'a', no puede haber ningún otro hermano que los separe o se interponga entre ellos.
a ~ b {}    Obliga a que 'b' sea hermano de 'a' (estén ambos contenidos diréctamente 
            en el mismo elemento). No importa que en el html entre ambos haya otros elementos hermanos interpuestos.
a > b {}    Apunta a los elementos b contenidos directamente en a (hijos).


 
